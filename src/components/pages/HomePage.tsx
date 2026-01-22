export const HomePage = () => {
  const userName = localStorage.getItem('userName');

  return (
    <div style={{ 
      padding: '40px', 
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'sans-serif' 
    }}>
      <h1>Bienvenido, {userName ?? 'Usuario'} 👋</h1>
    </div>
  );
};