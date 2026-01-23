import { describe, it, expect, beforeEach } from 'vitest';
import { authInterceptor } from '../authInterceptor';

describe('authInterceptor', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  it('agrega Authorization header cuando hay token', () => {
    // Arrange
    localStorage.setItem('accessToken', 'fake-token');

    const config = {
      headers: {},
    };

    // Act
    const result = authInterceptor(config as any);

    // Assert
    expect(result.headers.Authorization).toBe('Bearer fake-token');
  });

  it('NO agrega Authorization header cuando no hay token', () => {
    // Arrange
    const config = {
      headers: {},
    };

    // Act
    const result = authInterceptor(config as any);

    // Assert
    expect(result.headers.Authorization).toBeUndefined();
  });

});
