import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { RegisterPage } from './RegisterPage';

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
  registerUser: vi.fn(),
}));

import { registerUser } from '../../apis';

const setup = () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
};

describe('RegisterPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza el formulario de registro', () => {
    setup();

    expect(screen.getByText(/Crear Cuenta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(document.getElementById('password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Registrarse/i })
    ).toBeInTheDocument();
  });

  it('muestra errores cuando se envía el formulario vacío', async () => {
    setup();

    fireEvent.click(
      screen.getByRole('button', { name: /Registrarse/i })
    );

    expect(
      await screen.findByText(/El nombre es obligatorio/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/El correo es obligatorio/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/La contraseña es obligatoria/i)
    ).toBeInTheDocument();

    expect(registerUser).not.toHaveBeenCalled();
  });

  it('registra correctamente y redirige al login', async () => {
    vi.mocked(registerUser).mockResolvedValue(undefined);

    // Evitamos que el alert ensucie la consola
    vi.spyOn(window, 'alert').mockImplementation(() => {});

    setup();

    fireEvent.change(screen.getByLabelText(/Nombre Completo/i), {
      target: { value: 'Adrián' },
    });

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: 'adrian@test.com' },
    });

    fireEvent.change(document.getElementById('password')!, {
      target: { value: '123456' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Registrarse/i })
    );

    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({
        nombre: 'Adrián',
        email: 'adrian@test.com',
        password: '123456',
      });
    });

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('muestra mensaje de error cuando la API falla', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.mocked(registerUser).mockRejectedValue(new Error('Email already exists'));

    setup();

    fireEvent.change(screen.getByLabelText(/Nombre Completo/i), {
      target: { value: 'Adrián' },
    });

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: 'adrian@test.com' },
    });

    fireEvent.change(document.getElementById('password')!, {
      target: { value: '123456' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Registrarse/i })
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Hubo un error al crear la cuenta/i)
      ).toBeInTheDocument();
    });
  });
});
