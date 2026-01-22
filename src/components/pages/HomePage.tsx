export const HomePage = () => {
  const userName = localStorage.getItem('userName');

  return (
    <div style={{ padding: '40px' }}>
      <h1>Bienvenido {userName ?? 'Usuario'}</h1>
    </div>
  );
};
