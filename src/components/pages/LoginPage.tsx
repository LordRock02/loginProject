import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthTemplate } from '../templates/AuthTemplate/AuthTemplate';
import { authTemplateMock } from '../templates/AuthTemplate/AuthTemplate.mock';

import { InputGroup } from '../molecules/InputGroup/InputGroup';
import { Button } from '../atoms/Button/Button';

import {loginUser} from '../../apis';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });

      localStorage.setItem('userName', response.nombre);

      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('Credenciales incorrectas');
    }
  };

  return (
    <AuthTemplate {...authTemplateMock.default}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <div>
          <InputGroup
            label="Email"
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputGroup
            label="Contraseña"
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button label='Login' type="submit" style={{ width: '100%' }}>
          Ingresar
        </Button>
      </form>
    </AuthTemplate>
  );
};
