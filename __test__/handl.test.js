/**
 * @jest-environment jsdom
 */


test("Testing the handleSubmit() function", async () => {
    const submitButton = document.getElementById('submitButton');

    // Simulate a click event on the submit button
    submitButton.click();

    
    await new Promise(r => setTimeout(r, 0));

    // Add assertions to verify the functionality
    expect(global.fetch).toHaveBeenCalledTimes(1);

    //  DOM changes
    expect(document.getElementById('text').innerHTML).toBe('Mocked Text');
    expect(document.getElementById('score-tag').innerHTML).toBe('POS');
    expect(document.getElementById('aggreement').innerHTML).toBe('AGREE');
    expect(document.getElementById('confidence').innerHTML).toBe('HIGH');
});