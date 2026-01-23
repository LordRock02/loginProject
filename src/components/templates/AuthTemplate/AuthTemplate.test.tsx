import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AuthTemplate } from './AuthTemplate';
import { authTemplateMock } from './AuthTemplate.mock';

describe('AuthTemplate', () => {
  it('renderiza el título correctamente', () => {
    render(
      <AuthTemplate title={authTemplateMock.default.title}>
        <div>Contenido</div>
      </AuthTemplate>
    );

    expect(
      screen.getByText(authTemplateMock.default.title)
    ).toBeInTheDocument();
  });

  it('renderiza el subtítulo cuando se envía', () => {
    render(
      <AuthTemplate
        title={authTemplateMock.default.title}
        subtitle={authTemplateMock.default.subtitle}
      >
        <div>Contenido</div>
      </AuthTemplate>
    );

    expect(
      screen.getByText(authTemplateMock.default.subtitle)
    ).toBeInTheDocument();
  });

  it('no renderiza el subtítulo cuando no se envía', () => {
    render(
      <AuthTemplate title="Solo título">
        <div>Contenido</div>
      </AuthTemplate>
    );

    expect(
      screen.queryByText(/Ingresa tus credenciales/i)
    ).not.toBeInTheDocument();
  });

  it('renderiza correctamente los children', () => {
    render(
      <AuthTemplate title="Template Test">
        <form>
          <button>Enviar</button>
        </form>
      </AuthTemplate>
    );

    expect(
      screen.getByRole('button', { name: /Enviar/i })
    ).toBeInTheDocument();
  });
});
