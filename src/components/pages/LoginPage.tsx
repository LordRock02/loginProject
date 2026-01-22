import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Tus componentes Atomic
import { AuthTemplate } from '../templates/AuthTemplate/AuthTemplate';
import { authTemplateMock } from '../templates/AuthTemplate/AuthTemplate.mock';
import { InputGroup } from '../molecules/InputGroup/InputGroup';
import { Button } from '../atoms/Button/Button';

// Tu servicio (asegúrate de que la ruta sea correcta)
import { loginUser } from '../../apis'; 
// NOTA: Si tu archivo se llama 'apis', cambia la línea de arriba por:
// import { loginUser } from '../../apis';

export const LoginPage = () => {
  // 1. Estados para los datos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // 2. Estados para la Interfaz (UI)
  const [error, setError] = useState('');       // Para pintar los inputs de rojo
  const [isLoading, setIsLoading] = useState(false); // Para el spinner del botón
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reiniciamos estados antes de enviar
    setError('');
    setIsLoading(true);

    try {
      const response = await loginUser({ email, password });

      // Guardamos info y redirigimos
      // (Asegúrate de que 'response.nombre' exista en tu backend, o usa response.data.token)
      localStorage.setItem('userName', response.nombre || 'Usuario'); 
      navigate('/home');

    } catch (err) {
      console.error(err);
      // En lugar de alert, guardamos el error para mostrarlo en el input
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    } finally {
      // Pase lo que pase, terminamos de cargar
      setIsLoading(false);
    }
  };

  return (
    <AuthTemplate {...authTemplateMock.default}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <div>
          {/* INPUT: EMAIL */}
          <InputGroup
            label="Email"
            id="email"
            icon="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Si hay error, este input se pondrá rojo pero sin mensaje de texto (opcional)
            hasError={!!error} 
          />

          {/* INPUT: PASSWORD */}
          <InputGroup
            label="Contraseña"
            id="password"
            type="password"
            icon="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // Aquí pasamos el mensaje de error completo. 
            // La molécula mostrará el borde rojo Y el texto abajo.
            error={error} 
          />
        </div>

        {/* BOTÓN */}
        <Button 
          label="Ingresar" 
          type="submit" 
          style={{ width: '100%' }}
          // La magia del átomo: se deshabilita y muestra "Cargando..." solo
          isLoading={isLoading} 
        />
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            ¿No tienes cuenta?{' '}
            <Link to="/register" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
              Regístrate aquí
            </Link>
          </span>
        </div>
      </form>
    </AuthTemplate>
  );
};