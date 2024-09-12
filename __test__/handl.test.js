// __test__/handleSubmit.test.js

// Import the function to be tested
import { handleSubmit } from '../src/client/js/formHandler';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      sentence_list: [
        {},
        {
          text: "Test text",
          score_tag: "Test score",
          agreement: "Test agreement",
          confidence: "Test confidence"
        }
      ]
    }),
  })
);

describe('Testing the handleSubmit() function', () => {
  beforeEach(() => {
    // Set up the mock DOM elements
    document.body.innerHTML = `
      <form id="form">
        <input type="text" id="name" value="http://example.com" />
        <button id="submit">Submit</button>
      </form>
      <div id="text"></div>
      <div id="score-tag"></div>
      <div id="aggreement"></div>
      <div id="confidence"></div>
    `;
  });

  test('Testing if the submit button click triggers handleSubmit and updates the DOM', async () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', handleSubmit);

    // Simulate a click event on the submit button
    submitButton.click();

    // Wait for the promises to resolve
    await new Promise(r => setTimeout(r, 0));

    // Assertions
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8082/api', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'http://example.com' })
    });

    expect(document.getElementById('text').innerHTML).toBe('Test text');
    expect(document.getElementById('score-tag').innerHTML).toBe('Test score');
    expect(document.getElementById('aggreement').innerHTML).toBe('Test agreement');
    expect(document.getElementById('confidence').innerHTML).toBe('Test confidence');
  });

  afterEach(() => {
    // Clear the mock fetch
    global.fetch.mockClear();
  });
});