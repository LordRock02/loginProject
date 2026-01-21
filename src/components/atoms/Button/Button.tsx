import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean; // Para mostrar "Cargando..." si quieres luego
}

export const Button = ({ label, isLoading, className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={`button ${className}`}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Cargando...' : label}
    </button>
  );
};