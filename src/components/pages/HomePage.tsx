import { useEffect, useState } from 'react';
import { getCurrentUser} from '../../apis';
import type { UsuarioResponse } from '../../apis';


export const HomePage = () => {
  const [user, setUser] = useState<UsuarioResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (error) {
        console.error('No se pudo obtener usuario', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={{ padding: '40px', color: '#ffffff', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bienvenido, {user?.nombre ?? 'Usuario'} 👋</h1>
    </div>
  );
};
