// src/App.tsx
import { AuthTemplate } from './components/templates/AuthTemplate/AuthTemplate';
import { authTemplateMock } from './components/templates/AuthTemplate/AuthTemplate.mock';

import { InputGroup } from './components/molecules/InputGroup/InputGroup';
import { inputGroupMock } from './components/molecules/InputGroup/InputGroup.mock';

import { Button } from './components/atoms/Button/Button';
import { buttonMock } from './components/atoms/Button/Button.mock';

function App() {
  return (
    // 1. Usamos tu Template (El esqueleto)
    <AuthTemplate {...authTemplateMock.default}>
      
      {/* 2. Simulamos el formulario usando tus Moléculas y Átomos */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Inputs */}
        <div>
          <InputGroup {...inputGroupMock.default} />
          {/* Simulamos un segundo input manual para password */}
          <InputGroup label="Contraseña" id="password" type="password" placeholder="••••••••" />
        </div>

        {/* Botón */}
        <Button {...buttonMock.primary} style={{ width: '100%' }} />

      </form>

    </AuthTemplate>
  );
}

export default App;