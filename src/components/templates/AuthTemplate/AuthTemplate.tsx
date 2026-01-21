import {type ReactNode } from 'react';
import './AuthTemplate.css';

interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode; // Aquí irá el Login o Register form
}

export const AuthTemplate = ({ title, subtitle, children }: AuthTemplateProps) => {
  return (
    <div className="auth-template">
      <div className="auth-card">
        <h1 className="auth-title">{title}</h1>
        {subtitle && <p className="auth-subtitle">{subtitle}</p>}
        
        {/* Aquí se renderizará lo que le pasemos dentro */}
        {children}
      </div>
    </div>
  );
};