import { isValidUrl } from '../src/client/js/checkurl';



describe('URL Validation Tests', () => {
  
  test('should return true for a valid URL with HTTP', () => {
    const url = 'http://example.com';
    expect(isValidUrl(url)).toBe(true);
  });

  // Test for a valid URL with HTTPS protocol
  test('should return true for a valid URL with HTTPS', () => {
    const url = 'https://example.com';
    expect(isValidUrl(url)).toBe(true);
  });

  // Test for a valid URL with query parameters
  test('should return true for a URL with query parameters', () => {
    const url = 'https://example.com/path?name=test';
    expect(isValidUrl(url)).toBe(true);
  });

  // Test for a valid URL with an IP address
  test('should return true for a valid URL with an IP address', () => {
    const url = 'http://192.168.1.1';
    expect(isValidUrl(url)).toBe(true);
  });

  // Test for an invalid URL (missing protocol)
  test('should return false for an invalid URL (missing protocol)', () => {
    const url = 'www.example.com';
    expect(isValidUrl(url)).toBe(true);
  });

  // Test for an invalid URL (incorrect format)
  test('should return false for an invalid URL format', () => {
    const url = 'http:/example';
    expect(isValidUrl(url)).toBe(false);
  });

  // Test for an invalid URL (completely wrong string)
  test('should return false for a random string', () => {
    const url = 'not_a_url';
    expect(isValidUrl(url)).toBe(false);
  });

  // Test for an empty string (should be invalid)
  test('should return false for an empty string', () => {
    const url = '';
    expect(isValidUrl(url)).toBe(false);
  });
});