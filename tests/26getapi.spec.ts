import { test } from '@playwright/test';


test.skip("Get All Objects", async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects');
    // console.log(response);

    const jsonResponse = await response.json();
    console.log(jsonResponse);

    console.log(jsonResponse[0]);

    console.log(jsonResponse[0].id);
    console.log(jsonResponse[0].name);
    console.log(jsonResponse[0].data.color);
    console.log(jsonResponse[0].data.capacity);

    console.log(jsonResponse[1]);

    console.log(jsonResponse[1].id);
    console.log(jsonResponse[1].name);
    // console.log(jsonResponse[1].data.color);
    // console.log(jsonResponse[1].data.capacity);

    console.log(jsonResponse[2]);

    const capacityGB = 'capacity GB';

    console.log(jsonResponse[2].id);
    console.log(jsonResponse[2].name);
    console.log(jsonResponse[2].data.color);
    console.log(jsonResponse[2].data[capacityGB]);


});


test("Get One Object", async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects/1');
    // console.log(response);

    const jsonResponse = await response.json();
    console.log(jsonResponse);

    console.log(jsonResponse.id);
    console.log(jsonResponse.name);
    console.log(jsonResponse.data.color);
    console.log(jsonResponse.data.capacity);
});

