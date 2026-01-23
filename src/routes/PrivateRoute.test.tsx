import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

// Mock de Navigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );

  return {
    ...actual,
    Navigate: ({ to }: { to: string }) => (
      <div data-testid="navigate">Redirect to {to}</div>
    ),
  };
});

describe('PrivateRoute', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('redirige al login cuando no hay token', () => {
    render(
      <MemoryRouter>
        <PrivateRoute>
          <div>Contenido protegido</div>
        </PrivateRoute>
      </MemoryRouter>
    );

    expect(screen.getByTestId('navigate')).toHaveTextContent('Redirect to /');
    expect(
      screen.queryByText('Contenido protegido')
    ).not.toBeInTheDocument();
  });

  it('renderiza los children cuando hay token', () => {
    localStorage.setItem('accessToken', 'fake-token');

    render(
      <MemoryRouter>
        <PrivateRoute>
          <div>Contenido protegido</div>
        </PrivateRoute>
      </MemoryRouter>
    );

    expect(
      screen.getByText('Contenido protegido')
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId('navigate')
    ).not.toBeInTheDocument();
  });
});
