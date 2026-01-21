export const buttonMock = {
  primary: {
    label: 'Iniciar Sesión',
    type: 'submit' as const, // 'as const' asegura que TS sepa que es un tipo válido
    disabled: false,
  },
  loading: {
    label: 'Entrar',
    isLoading: true,
  },
  disabled: {
    label: 'Enviar',
    disabled: true,
  }
};