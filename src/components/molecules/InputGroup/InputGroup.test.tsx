import { render, screen, fireEvent } from '@testing-library/react';
import { InputGroup } from './InputGroup';
import { inputGroupMock } from './InputGroup.mock';

describe('InputGroup molecule', () => {
  it('renderiza label e input correctamente', () => {
    render(<InputGroup {...inputGroupMock.default} />);

    expect(
      screen.getByText('Nombre Completo')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Ej: Ana García')
    ).toBeInTheDocument();
  });

  it('renderiza el valor por defecto cuando se proporciona', () => {
    render(<InputGroup {...inputGroupMock.error} />);

    const input = screen.getByDisplayValue('ana.garcia') as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('ana.garcia');
  });

  it('muestra el mensaje de error cuando existe', () => {
    render(<InputGroup {...inputGroupMock.error} />);

    expect(
      screen.getByText('Falta el @ en tu correo')
    ).toBeInTheDocument();
  });

  it('aplica estado de error al input cuando existe error', () => {
    render(<InputGroup {...inputGroupMock.error} />);

    const input = screen.getByDisplayValue('ana.garcia');

    expect(input).toHaveClass('input--error');
  });

  it('permite mostrar y ocultar la contraseña', () => {
    render(
      <InputGroup
        label="Contraseña"
        id="password"
        type="password"
      />
    );

    const input = screen.getByLabelText('Contraseña') as HTMLInputElement;
    const toggleBtn = screen.getByRole('button');

    // Inicialmente oculto
    expect(input.type).toBe('password');

    // Mostrar
    fireEvent.click(toggleBtn);
    expect(input.type).toBe('text');

    // Ocultar nuevamente
    fireEvent.click(toggleBtn);
    expect(input.type).toBe('password');
  });
});
