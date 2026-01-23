import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from './LoginPage';
import { loginUser } from '../../apis';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('../../apis', () => ({
  loginUser: vi.fn(),
}));

describe('LoginPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  const setup = () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  };

  it('renderiza correctamente el formulario de login', () => {
    setup();

    expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();

    expect(document.getElementById('password')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Ingresar/i })
    ).toBeInTheDocument();
  });

  it('permite hacer login exitoso y redirige al home', async () => {
    // Arrange
    vi.mocked(loginUser).mockResolvedValue({
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      nombre: 'Adrián',
    });

    setup();

    // Act
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'adrian@test.com' },
    });

    fireEvent.change(document.getElementById('password') as HTMLInputElement, {
      target: { value: '123456' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Ingresar/i })
    );

    // Assert
    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({
        email: 'adrian@test.com',
        password: '123456',
      });
    });

    expect(localStorage.getItem('accessToken')).toBe('access-token');
    expect(localStorage.getItem('refreshToken')).toBe('refresh-token');
    expect(localStorage.getItem('userName')).toBe('Adrián');

    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });

  it('muestra mensaje de error cuando las credenciales son incorrectas', async () => {
    // Arrange
    vi.mocked(loginUser).mockRejectedValue(new Error('Unauthorized'));

    setup();

    // Act
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'mal@test.com' },
    });

    fireEvent.change(document.getElementById('password') as HTMLInputElement, {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Ingresar/i })
    );

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText(/Credenciales incorrectas/i)
      ).toBeInTheDocument();
    });

    expect(loginUser).toHaveBeenCalledTimes(1);
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
