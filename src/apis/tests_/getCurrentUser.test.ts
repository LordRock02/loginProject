import { describe, it, expect, vi } from 'vitest';
import { axiosInstance } from '../axiosInstance';
import { getCurrentUser } from '../userProfile';

vi.mock('../axiosInstance', () => ({
  axiosInstance: {
    get: vi.fn(),
  },
}));

describe('getCurrentUser', () => {
  it('obtiene el usuario actual', async () => {
    const user = {
      nombre: 'Adrian',
      email: 'adrian@test.com',
    };

    vi.mocked(axiosInstance.get).mockResolvedValueOnce({ data: user });

    const result = await getCurrentUser();

    expect(axiosInstance.get).toHaveBeenCalledWith(
      '/api/v1/usuarios/me'
    );

    expect(result).toEqual(user);
  });
});
