import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from './components/pages/LoginPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { HomePage } from './components/pages/HomePage';
import { DesignSystemPage } from './components/pages/DesignSystemPage';
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    
    <Route 
      path="/home" 
      element={
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      } 
    />

    <Route path="/test" element={<DesignSystemPage />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
