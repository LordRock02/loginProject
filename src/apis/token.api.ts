import { axiosInstance } from './axiosInstance';

export interface RefreshResponse {
  accessToken: string;
}

export const refreshToken = async (refreshToken: string): Promise<RefreshResponse> => {
  const { data } = await axiosInstance.post<RefreshResponse>('/api/v1/auth/login', {
    refreshToken,
  });
  return data;
};
