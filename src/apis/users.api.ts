import { axiosInstance } from './axiosInstance';

/**
 * User registration payload
 */
export interface RegisterUserRequest {
  nombre: string;
  email: string;
  password: string;
}

/**
 * Registers a new user
 */
export const registerUser = async (
  payload: RegisterUserRequest
): Promise<void> => {
  await axiosInstance.post('api/v1/usuarios', payload);
};
