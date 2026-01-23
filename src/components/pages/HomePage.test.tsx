import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HomePage } from './HomePage';

vi.mock('../../apis', () => ({
  getCurrentUser: vi.fn(),
}));

// Importamos el mock tipado
import { getCurrentUser } from '../../apis';

describe('HomePage', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza el texto por defecto cuando no hay usuario', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Bienvenido, Usuario/i)
    ).toBeInTheDocument();
  });

  it('muestra el nombre del usuario cuando la API responde', async () => {
    // Arrange
    vi.mocked(getCurrentUser).mockResolvedValue
    ({
        nombre: 'Adrián',
        email: 'adrian@test.com',
      });

    // Act
    render(<HomePage />);

    // Assert (esperamos el efecto async)
    await waitFor(() => {
      expect(
        screen.getByText(/Bienvenido, Adrián/i)
      ).toBeInTheDocument();
    });

    expect(getCurrentUser).toHaveBeenCalledTimes(1);
  });

});
