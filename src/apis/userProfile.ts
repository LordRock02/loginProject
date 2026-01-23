import { axiosInstance } from './axiosInstance';

export interface UsuarioResponse {
  nombre: string;
  email: string;
}

export const getCurrentUser = async (): Promise<UsuarioResponse> => {
  const { data } = await axiosInstance.get<UsuarioResponse>('/api/v1/usuarios/me');
  return data;
};
