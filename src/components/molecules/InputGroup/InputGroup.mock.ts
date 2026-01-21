// src/components/molecules/InputGroup/InputGroup.mock.ts

export const inputGroupMock = {
  // Caso 1: Un input normal limpio
  default: {
    label: 'Nombre Completo',
    id: 'fullname',
    placeholder: 'Ej: Ana García',
    type: 'text',
  },
  
  // Caso 2: Un input simulando un error
  error: {
    label: 'Correo Electrónico',
    id: 'email-error',
    type: 'email',
    defaultValue: 'ana.garcia', // Valor incorrecto
    error: 'Falta el @ en tu correo', // Esto activará el borde rojo y el mensaje
  }
};