import { expect, test } from '@playwright/test';

test("Post One Object", async ({ request }) => {
    const response = await request.post('https://api.restful-api.dev/objects',
        {
            headers: {
                "content-type": "application/json"
            },
            data: {
                "name": "Playwright Pro Max 2026",
                "data": {
                    "year": 2026,
                    "price": 1999.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB"
                }
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
    console.log(jsonResponse.createdAt);

    console.log(jsonResponse.data.year);
    console.log(jsonResponse.data.price);

    const CPUmodel = 'CPU model';
    const hardDisk = 'Hard disk size';

    console.log(jsonResponse.data[CPUmodel]);
    console.log(jsonResponse.data[hardDisk]);

    expect.soft(jsonResponse.data[hardDisk]).toBe('2 TB');

});

