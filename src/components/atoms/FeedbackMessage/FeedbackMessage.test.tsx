import { render, screen } from '@testing-library/react';
import { FeedbackMessage } from './FeedbackMessage';
import { feedbackMessageMock } from './FeedbackMessage.mock';

describe('FeedbackMessage atom', () => {
  it('NO renderiza nada cuando no hay message', () => {
    const { container } = render(<FeedbackMessage />);

    expect(container.firstChild).toBeNull();
  });

  it('renderiza mensaje de error', () => {
    render(<FeedbackMessage {...feedbackMessageMock.error} />);

    expect(
      screen.getByText('El formato del correo no es válido')
    ).toBeInTheDocument();
  });

  it('renderiza mensaje de success', () => {
    render(<FeedbackMessage {...feedbackMessageMock.success} />);

    expect(
      screen.getByText('Usuario verificado correctamente')
    ).toBeInTheDocument();
  });
});
