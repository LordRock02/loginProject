import './Label.css';

interface LabelProps {
  text: string;
  htmlFor?: string; // Importante para accesibilidad (conectar con el input)
}

export const Label = ({ text, htmlFor }: LabelProps) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {text}
    </label>
  );
};