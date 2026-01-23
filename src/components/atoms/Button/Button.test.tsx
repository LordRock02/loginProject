import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { buttonMock } from './Button.mock';

describe('Button atom', () => {
  it('renderiza el label correctamente', () => {
    render(<Button {...buttonMock.primary} />);

    expect(
      screen.getByRole('button', { name: 'Iniciar Sesión' })
    ).toBeInTheDocument();
  });

  it('muestra "Cargando..." cuando isLoading es true', () => {
    render(<Button {...buttonMock.loading} />);

    expect(
      screen.getByRole('button', { name: 'Cargando...' })
    ).toBeInTheDocument();
  });

  it('está deshabilitado cuando disabled es true', () => {
    render(<Button {...buttonMock.disabled} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('está deshabilitado cuando isLoading es true', () => {
    render(<Button {...buttonMock.loading} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('ejecuta onClick cuando está habilitado', () => {
    const onClick = vi.fn();

    render(
      <Button
        label="Click"
        onClick={onClick}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('NO ejecuta onClick cuando está deshabilitado', () => {
    const onClick = vi.fn();

    render(
      <Button
        label="Click"
        disabled
        onClick={onClick}
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).not.toHaveBeenCalled();
  });
});
