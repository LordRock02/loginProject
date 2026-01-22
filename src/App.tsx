import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from './components/pages/LoginPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { HomePage } from './components/pages/HomePage';
import { DesignSystemPage } from './components/pages/DesignSystemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Home */}
        <Route path="/home" element={<HomePage />} />

        {/* test de componentes */}
        <Route path="/test" element={<DesignSystemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
