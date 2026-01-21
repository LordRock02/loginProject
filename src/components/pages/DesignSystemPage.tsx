// src/pages/DesignSystemPage.tsx

import { Label } from '../atoms/Label/Label';
import { labelMock } from '../atoms/Label/Label.mock';

import { Input } from '../atoms/Input/Input';
import { inputMock } from '../atoms/Input/Input.mock';

import { FeedbackMessage } from '../atoms/FeedbackMessage/FeedbackMessage';
import { feedbackMessageMock } from '../atoms/FeedbackMessage/FeedbackMessage.mock';

// 👇 AQUÍ IMPORTAMOS TU NUEVA MOLÉCULA
import { InputGroup } from '../molecules/InputGroup/InputGroup';
import { inputGroupMock } from '../molecules/InputGroup/InputGroup.mock';

import { Button } from '../atoms/Button/Button';
import { buttonMock } from '../atoms/Button/Button.mock';


export const DesignSystemPage = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', paddingBottom: '100px' }}>
      <h1 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        🏗️ Design System Showcase
      </h1>
      <p style={{ color: '#666' }}>
        Catálogo de componentes base del Desarrollador A.
      </p>

      {/* --- SECCIÓN 1: LABELS --- */}
      <section style={{ marginTop: '40px' }}>
        <h2>1. Atoms: Label</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.note}>Default</p>
            <Label {...labelMock.default} />
          </div>
          <div style={styles.card}>
            <p style={styles.note}>Para Password</p>
            <Label {...labelMock.password} />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: INPUTS --- */}
      <section style={{ marginTop: '40px' }}>
        <h2>2. Atoms: Input</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.note}>Estado Normal</p>
            <Input {...inputMock.default} />
          </div>
          
          <div style={styles.card}>
            <p style={styles.note}>Estado Error</p>
            <Input {...inputMock.error} />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: FEEDBACK --- */}
      <section style={{ marginTop: '40px' }}>
        <h2>3. Atoms: Feedback Message</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.note}>Error</p>
            <FeedbackMessage {...feedbackMessageMock.error} />
          </div>
          <div style={styles.card}>
            <p style={styles.note}>Success</p>
            <FeedbackMessage {...feedbackMessageMock.success} />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: MOLECULES (NUEVO) --- */}
      <section style={{ marginTop: '40px', borderTop: '2px solid #ddd', paddingTop: '20px' }}>
        <h2>4. Molecules: Input Group</h2>
        <p style={{ color: '#555', marginBottom: '15px' }}>
          Aquí vemos la magia del Atomic Design: Átomos uniéndose para formar un campo funcional.
        </p>

        <div style={styles.grid}>
          {/* GRUPO 1: LIMPIO */}
          <div style={styles.card}>
            <p style={styles.note}>Formulario Limpio</p>
            {/* Solo pasamos los datos, el componente arma todo */}
            <InputGroup {...inputGroupMock.default} />
          </div>
          
          {/* GRUPO 2: CON ERROR */}
          <div style={styles.card}>
            <p style={styles.note}>Validación de Error</p>
            {/* Fíjate cómo el Label, el Input rojo y el mensaje aparecen solos */}
            <InputGroup {...inputGroupMock.error} />
          </div>
        </div>
      </section>
      <section style={{ marginTop: '40px' }}>
        <h2>Atoms: Button</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.note}>Botón Principal</p>
            <Button {...buttonMock.primary} />
          </div>
          
          <div style={styles.card}>
            <p style={styles.note}>Estado Cargando</p>
            <Button {...buttonMock.loading} />
          </div>

          <div style={styles.card}>
            <p style={styles.note}>Estado Deshabilitado</p>
            <Button {...buttonMock.disabled} />
          </div>
        </div>
      </section>
    </div>
  );
};

// Estilos simples para la demo
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Hice las columnas un poco más anchas
    gap: '20px',
  },
  card: {
    border: '1px solid #e5e7eb',
    padding: '24px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  note: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    marginBottom: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontWeight: 'bold' as const,
  }
};