import { useState } from 'react';

import { Button } from '../atoms/Button/Button';
import { InputGroup } from '../molecules/InputGroup/InputGroup';
import {registerUser} from '../../apis';

export const RegisterPage = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await registerUser({ nombre, email, password });
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <InputGroup
        id="nombre"
        label="Nombre Completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        error={!nombre ? 'El nombre es obligatorio' : ''}
      />

      <InputGroup
        id="email"
        label="Correo Electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!email ? 'El correo es obligatorio' : ''}
      />

      <InputGroup
        id="password"
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!password ? 'La contraseña es obligatoria' : ''}
      />

      <Button label="Registrarse" type="submit" />

      {success && <p>Usuario registrado correctamente</p>}
    </form>
  );
};
