import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = ({ hasError, className = '', ...props }: InputProps) => {
  return (
    <input 
      className={`input ${hasError ? 'input--error' : ''} ${className}`}
      {...props}
    />
  );
};