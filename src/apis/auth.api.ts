import { axiosInstance } from './axiosInstance';

/**
 * Login request payload
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Login response from backend
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  nombre: string;
}


/**
 * Executes login request against backend
 */
export const loginUser = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post<LoginResponse>(
    '/api/v1/auth/login',
    payload
  );

  return data;
};
