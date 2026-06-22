import { expect, test } from '@playwright/test';

test("Delete One Object", async ({ request }) => {
    const response = await request.delete('https://api.restful-api.dev/objects/ff8081819d82fab6019ece65e5df13dd');

    console.log(response.status()); //200
    expect.soft(response.status()).toBe(200);

    console.log(response.statusText()); // OK
    expect.soft(response.statusText()).toBe('OK');

    const jsonResponse = await response.json();
    console.log(jsonResponse);

    console.log(jsonResponse.message);
    expect.soft(jsonResponse.message).toBe(`Object with id = ff8081819d82fab6019ece65e5df13dd has been deleted.`);

});

