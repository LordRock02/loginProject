import { describe, it, expect, vi } from 'vitest';
import { axiosInstance } from '../axiosInstance';
import { registerUser } from '../users.api';

vi.mock('../axiosInstance', () => ({
  axiosInstance: {
    post: vi.fn(),
  },
}));

describe('registerUser', () => {
  it('envía los datos de registro correctamente', async () => {
    const payload = {
      nombre: 'Adrian',
      email: 'adrian@test.com',
      password: '123456',
    };

    vi.mocked(axiosInstance.post).mockResolvedValueOnce({});

    await registerUser(payload);

    expect(axiosInstance.post).toHaveBeenCalledWith(
      'api/v1/usuarios',
      payload
    );
  });
});
