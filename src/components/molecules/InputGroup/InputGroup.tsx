import { useState } from 'react';
import { Input, type InputProps } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { FeedbackMessage } from '../../atoms/FeedbackMessage/FeedbackMessage';
import './InputGroup.css';

// Extendemos las props para aceptar 'icon' incluyendo 'password'
interface InputGroupProps extends InputProps {
  label: string;
  error?: string;
  id: string;
  icon?: 'user' | 'email' | 'password';
}

export const InputGroup = ({ label, error, id, type, icon, ...props }: InputGroupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Función auxiliar para renderizar el ícono izquierdo
  const renderStartIcon = () => {
    if (icon === 'user') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      );
    }
    if (icon === 'email') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    }
    // 👇 AQUÍ ESTÁ EL CANDADO AGREGADO
    if (icon === 'password') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      );
    }
    return null;
  };
  const inputClasses = [
    icon ? 'input-with-start-icon' : '',
    isPassword ? 'input-with-icon' : ''
  ].join(' ').trim();

  return (
    <div className="input-group">
      <Label text={label} htmlFor={id} />
      
      <div className="input-wrapper">
        
        {/* Renderizamos el ícono izquierdo si existe */}
        {icon && (
          <span className="input-icon-start">
            {renderStartIcon()}
          </span>
        )}

        <Input 
          id={id} 
          type={inputType} 
          hasError={!!error}
          className={inputClasses} // Aplicamos las clases dinámicas
          {...props} 
        />
        
        {/* Ícono de Ojo para ver/ocultar password (Derecha) */}
        {isPassword && (
          <button 
            type="button" 
            onClick={togglePasswordVisibility}
            className="toggle-password-btn"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </button>
        )}
      </div>
      
      <FeedbackMessage message={error} type="error" />
    </div>
  );
};