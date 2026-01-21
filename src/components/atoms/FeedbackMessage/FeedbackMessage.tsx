import './FeedbackMessage.css';

interface FeedbackMessageProps {
  message?: string;
  type?: 'error' | 'success'; // Soporta ambos tipos
}

export const FeedbackMessage = ({ message, type = 'error' }: FeedbackMessageProps) => {
  // Si no hay mensaje, no renderizamos nada (para no ocupar espacio vacío)
  if (!message) return null;

  return (
    <span className={`feedback feedback--${type}`}>
      {message}
    </span>
  );
};