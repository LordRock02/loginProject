import { Input, type InputProps } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { FeedbackMessage } from '../../atoms/FeedbackMessage/FeedbackMessage';
import './InputGroup.css';

interface InputGroupProps extends InputProps {
  label: string;
  error?: string; // Mensaje de error (opcional)
  id: string;     // Obligatorio para accesibilidad
}

export const InputGroup = ({ label, error, id, ...props }: InputGroupProps) => {
  return (
    <div className="input-group">
      <Label text={label} htmlFor={id} />
      
      <Input 
        id={id} 
        // Si hay un mensaje de error, activamos el borde rojo del input automáticamente
        hasError={!!error} 
        {...props} 
      />
      
      <FeedbackMessage message={error} type="error" />
    </div>
  );
};