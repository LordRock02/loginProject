export const feedbackMessageMock = {
  error: {
    message: 'El formato del correo no es válido',
    type: 'error' as const,
  },
  success: {
    message: 'Usuario verificado correctamente',
    type: 'success' as const,
  }
};