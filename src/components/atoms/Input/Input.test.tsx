import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import { inputMock } from './Input.mock';

describe('Input atom', () => {
  it('renderiza el input', () => {
    render(<Input {...inputMock.default} />);

    expect(
      screen.getByPlaceholderText('Escribe tu correo...')
    ).toBeInTheDocument();
  });

  it('permite escribir en el input', () => {
    render(<Input {...inputMock.default} />);

    const input = screen.getByPlaceholderText(
      'Escribe tu correo...'
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: 'test@email.com' },
    });

    expect(input.value).toBe('test@email.com');
  });

  it('aplica estado de error cuando hasError es true', () => {
    render(<Input {...inputMock.error} />);

    const input = screen.getByPlaceholderText(
      'Escribe tu correo...'
    );

    expect(input).toHaveClass('input--error');
  });
});
