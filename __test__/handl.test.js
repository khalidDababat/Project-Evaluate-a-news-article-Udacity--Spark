// __test__/handleSubmit.test.js

// Import the function to be tested
import { handleSubmit } from '../src/client/js/formHandler';
import { isValidUrl } from '../src/client/js/checkurl';

// Mock the DOM elements
document.body.innerHTML = `
  <input id="name" value="https://www.example.com" />
  <div id="text"></div>
  <div id="score-tag"></div>
  <div id="aggreement"></div>
  <div id="confidence"></div>
`;

// Mock `isValidUrl` and `fetch`
jest.mock('../src/client/js/checkurl.js', () => ({
  isValidUrl: jest.fn(),
}));

describe('handleSubmit', () => {

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          sentence_list: [
            {
              text: 'Sample text',
              score_tag: 'POS',
              agreement: 'AGREEMENT',
              confidence: '100',
            },
          ],
        }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call fetch and update DOM when the URL is valid', async () => {
    // Mock the isValidUrl to return true
    isValidUrl.mockReturnValue(true);

    // Create a mock event with preventDefault
    const event = { preventDefault: jest.fn() };

    // Call the handleSubmit function
    await handleSubmit(event);

    // Check if fetch was called
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8082/api",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://www.example.com" }),
      })
    );

    // Check if the DOM was updated with fetched data
    expect(document.getElementById("text").innerHTML).toBe("Sample text");
    expect(document.getElementById("score-tag").innerHTML).toBe("POS");
    expect(document.getElementById("aggreement").innerHTML).toBe("AGREEMENT");
    expect(document.getElementById("confidence").innerHTML).toBe("100");
  });

  test('should alert if the URL is invalid', () => {
    // Mock the isValidUrl to return false
    isValidUrl.mockReturnValue(false);

    // Mock the alert function
    global.alert = jest.fn();

    // Create a mock event with preventDefault
    const event = { preventDefault: jest.fn() };

    // Call the handleSubmit function
    handleSubmit(event);

    // Check if alert was called
    expect(global.alert).toHaveBeenCalledWith("Please Enter The Valid URL");

    // Ensure fetch wasn't called
    expect(global.fetch).not.toHaveBeenCalled();
  });
});