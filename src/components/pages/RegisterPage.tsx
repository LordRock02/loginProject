import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../atoms/Button/Button';
import { InputGroup } from '../molecules/InputGroup/InputGroup';
import { registerUser } from '../../apis';

/**
 * RegisterPage
 * Handles user registration form
 */
export const RegisterPage = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    if (!nombre || !email || !password) return;

    try {
      setLoading(true);
      await registerUser({ nombre, email, password });

      // Redirect to login after successful registration
      navigate('/');
    } catch (error) {
      console.error('Error registering user', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
    >
      <h2>Registro</h2>

      <InputGroup
        id="nombre"
        label="Nombre Completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        error={submitted && !nombre ? 'El nombre es obligatorio' : undefined}
      />

      <InputGroup
        id="email"
        label="Correo Electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={submitted && !email ? 'El correo es obligatorio' : undefined}
      />

      <InputGroup
        id="password"
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={submitted && !password ? 'La contraseña es obligatoria' : undefined}
      />

      <Button
        label="Registrarse"
        type="submit"
        isLoading={loading}
        disabled={loading}
      />
    </form>
  );
};
