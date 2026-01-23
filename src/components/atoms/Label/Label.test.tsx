import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import { labelMock } from './Label.mock';

describe('Label atom', () => {
  it('renderiza el texto del label', () => {
    render(<Label {...labelMock.default} />);

    expect(
      screen.getByText('Correo Electrónico')
    ).toBeInTheDocument();
  });

  it('asocia correctamente el htmlFor', () => {
    render(<Label {...labelMock.password} />);

    const label = screen.getByText('Contraseña');

    expect(label).toHaveAttribute('for', 'password-input');
  });
});
