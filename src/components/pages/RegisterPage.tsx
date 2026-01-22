import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Importaciones Atomic Design
import { AuthTemplate } from '../templates/AuthTemplate/AuthTemplate';
import { InputGroup } from '../molecules/InputGroup/InputGroup';
import { Button } from '../atoms/Button/Button';

// Tu servicio API
import { registerUser } from '../../apis';

export const RegisterPage = () => {
  // Estados del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados de control visual
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(''); // Para mostrar errores del servidor si fallan

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setApiError('');

    // Validación simple: Si falta algo, cortamos aquí.
    // Los inputs se pondrán rojos automáticamente gracias a la lógica en el render.
    if (!nombre || !email || !password) return;

    try {
      setLoading(true);
      await registerUser({ nombre, email, password });

      // Éxito: Redirigimos al login (o al home si tu API ya devuelve token)
      alert('¡Cuenta creada con éxito!'); // Feedback opcional
      navigate('/'); 
    } catch (error) {
      console.error('Error registering user', error);
      setApiError('Hubo un error al crear la cuenta. Intenta con otro correo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // 1. Usamos el Template para centrado y estilo
    <AuthTemplate 
      title="Crear Cuenta" 
      subtitle="Completa tus datos para empezar"
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        {/* Renderizado de Inputs */}
        <div>
           {/* NOMBRE */}
          <InputGroup
            id="nombre"
            label="Nombre Completo"
            icon="user"
            placeholder="Ej: Pepito Pérez"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            // Lógica: Si se envió el form Y está vacío -> Muestra error
            error={submitted && !nombre ? 'El nombre es obligatorio' : undefined}
          />

          {/* EMAIL */}
          <InputGroup
            id="email"
            label="Correo Electrónico"
            type="email"
            icon="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={submitted && !email ? 'El correo es obligatorio' : undefined}
          />

          {/* PASSWORD */}
          <InputGroup
            id="password"
            icon="password"
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={submitted && !password ? 'La contraseña es obligatoria' : undefined}
          />
        </div>

        {/* Mensaje de error de la API (si existe) */}
        {apiError && (
          <p style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center', margin: 0 }}>
            {apiError}
          </p>
        )}

        {/* Botón de Acción */}
        <Button
          label="Registrarse"
          type="submit"
          isLoading={loading}
          disabled={loading} // Evita doble clic
        />

        {/* Link para volver al Login (Mejora UX) */}
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            ¿Ya tienes cuenta?{' '}
            <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
              Inicia sesión
            </Link>
          </span>
        </div>

      </form>
    </AuthTemplate>
  );
};