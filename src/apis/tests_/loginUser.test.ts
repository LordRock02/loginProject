import { describe, it, expect, vi } from 'vitest';
import { axiosInstance } from '../axiosInstance';
import { loginUser } from '../auth.api';

vi.mock('../axiosInstance', () => ({
  axiosInstance: {
    post: vi.fn(),
  },
}));

describe('loginUser', () => {
  it('envía credenciales y retorna la respuesta', async () => {
    const payload = {
      email: 'test@test.com',
      password: '123456',
    };

    const response = {
      accessToken: 'token',
      refreshToken: 'refresh',
      nombre: 'Adrian',
    };

    vi.mocked(axiosInstance.post).mockResolvedValueOnce({ data: response });

    const result = await loginUser(payload);

    expect(axiosInstance.post).toHaveBeenCalledWith(
      '/api/v1/auth/login',
      payload
    );

    expect(result).toEqual(response);
  });
});
