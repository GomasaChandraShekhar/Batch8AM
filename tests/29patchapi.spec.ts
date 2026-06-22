import { expect, test } from '@playwright/test';

test("Patch One Object", async ({ request }) => {
    const response = await request.patch('https://api.restful-api.dev/objects/ff8081819d82fab6019ece65e5df13dd',
        {
            headers: {
                "content-type": "application/json"
            },
            data: {
                "name": "Playwright 2026",
            }
        });

    console.log(response.status()); //200
    expect.soft(response.status()).toBe(200);

    console.log(response.statusText()); // OK
    expect.soft(response.statusText()).toBe('OK');

    const jsonResponse = await response.json();
    console.log(jsonResponse);

    console.log(jsonResponse.id);
    console.log(jsonResponse.name);
    console.log(jsonResponse.updatedAt);

    console.log(jsonResponse.data.year);
    console.log(jsonResponse.data.price);
    console.log(jsonResponse.data.Color);

    const CPUmodel = 'CPU model';
    const hardDisk = 'Hard disk size';

    console.log(jsonResponse.data[CPUmodel]);
    console.log(jsonResponse.data[hardDisk]);

    expect.soft(jsonResponse.data[hardDisk]).toBe('3 TB');

});

