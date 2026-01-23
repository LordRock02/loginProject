import { describe, it, expect, vi } from 'vitest';
import { axiosInstance } from '../axiosInstance';
import { refreshToken } from '../token.api';

vi.mock('../axiosInstance', () => ({
  axiosInstance: {
    post: vi.fn(),
  },
}));

describe('refreshToken', () => {
  it('envía refresh token y retorna nuevo access token', async () => {
    const response = {
      accessToken: 'new-access-token',
    };

    vi.mocked(axiosInstance.post).mockResolvedValueOnce({ data: response });

    const result = await refreshToken('refresh-token');

    expect(axiosInstance.post).toHaveBeenCalledWith(
      '/api/v1/auth/login',
      { refreshToken: 'refresh-token' }
    );

    expect(result).toEqual(response);
  });
});
