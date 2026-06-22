import { test, APIRequestContext, expect } from '@playwright/test';
import ApiUtils from '../utils/ApiUtils';

let apiUtils: ApiUtils;
let apiContext: APIRequestContext;
let postPayLoad = {
    "name": "Playwright Pro 26",
    "data": {
        "year": 2026,
        "price": 1821.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "2 TB"
    }
};

let putPayLoad = {
    "name": "Playwright Pro Max 2026(Put - Updated)",
    "data": {
        "year": 2026,
        "price": 1999.99,
        "CPU model": "Intel Core i26",
        "Hard disk size": "26 TB"
    }
};

let patchPayLoad = {
    "name": "Playwright Pro Max 2026( patch - updated)"
};

const url: string = `https://api.restful-api.dev/objects`;

let jsonResponse: any;
const cpuModel = 'CPU model';
const hardDiskSize = 'Hard disk size';

test( 'Post Request', async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils(apiContext);
    const response = await apiUtils.postRequest(url, postPayLoad); 

    console.log(response.status());
    expect.soft(response.status()).toBe(200);
    console.log(response.statusText());
    expect.soft(response.statusText()).toBe('OK');

    jsonResponse = await response.json();

    console.log( jsonResponse.id );
    console.log( jsonResponse.name );
    console.log( jsonResponse.data.year );
    console.log( jsonResponse.data.price );
    console.log( jsonResponse.createdAt );
    console.log( jsonResponse.data[ cpuModel ] );
    console.log(jsonResponse.data[hardDiskSize]);
    


} );

test.skip( "Get All Resources", async ( { playwright } ) => {

    apiContext = await playwright.request.newContext();

    apiUtils = new ApiUtils( apiContext );

    jsonResponse = apiUtils.getAllResources( url );


    for ( const obj of jsonResponse ) {

        const id = obj.id;
        console.log( 'Id is :: ', id );

        const name = obj.name;
        console.log( 'Name is :: ', name );

        const year = obj.data.year;
        console.log( 'year is :: ', year );

        const price = obj.data.price;
        console.log( 'price is :: ', price );

        const cpuModel = 'CPU model';
        const cpuModeldata = obj.data[ cpuModel ];
        console.log( 'cpuModeldata is :: ', cpuModeldata );

        const hardDiskSize = 'Hard disk size';
        const hardDiskSizeData = obj.data[ hardDiskSize ];
        console.log( 'hardDiskSizeData is :: ', hardDiskSizeData );

    }
} );

test( "Get One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const oneResource = await apiUtils.getOneResource(url, jsonResponse.id);

    console.log(oneResource.status());
    expect.soft(oneResource.status()).toBe(200);
    console.log(oneResource.statusText());
    expect.soft(oneResource.statusText()).toBe('OK');

    const oneResourceJson = await oneResource.json();
    expect.soft(oneResourceJson.id).toBe(jsonResponse.id);
    
    expect.soft(oneResourceJson.name ).toBe( postPayLoad.name );
    expect.soft(oneResourceJson.data.year ).toBe( postPayLoad.data.year );
    expect.soft(oneResourceJson.data.price ).toBe( postPayLoad.data.price );
    expect.soft(oneResourceJson.data[ cpuModel ] ).toBe( postPayLoad.data[ cpuModel ] );
    expect.soft(oneResourceJson.data[hardDiskSize]).toBe(postPayLoad.data[hardDiskSize]);
    
} );

test( "Put One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const putResponse = await apiUtils.putRequest(url, jsonResponse.id, putPayLoad);
    
    console.log(putResponse.status());
    expect.soft(putResponse.status()).toBe(200);
    console.log(putResponse.statusText());
    expect.soft(putResponse.statusText()).toBe('OK');

    const putResponseJson = await putResponse.json();

    // expect.soft(oneResourceJson.id ).toBe( jsonResponse.id );
    expect.soft(putResponseJson.name ).toBe( putPayLoad.name );
    expect.soft(putResponseJson.data.year ).toBe( putPayLoad.data.year );
    expect.soft(putResponseJson.data.price ).toBe( putPayLoad.data.price );
    expect.soft(putResponseJson.data[ cpuModel ] ).toBe( putPayLoad.data[ cpuModel ] );
    expect.soft(putResponseJson.data[ hardDiskSize ] ).
        toBe( putPayLoad.data[ hardDiskSize ] );
} );

test( "Patch One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const patchResponse = await apiUtils.patchRequest(url, jsonResponse.id, patchPayLoad);

    console.log(patchResponse.status());
    expect.soft(patchResponse.status()).toBe(200);
    console.log(patchResponse.statusText());
    expect.soft(patchResponse.statusText()).toBe('OK');

    const patchResponseJson = await patchResponse.json();
    expect.soft(patchResponseJson.id ).toBe( jsonResponse.id );
    expect.soft(patchResponseJson.name ).toBe( patchPayLoad.name );

} );

test( "Delete One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const deleteResponse = await apiUtils.deleteRequest(url, jsonResponse.id);

    console.log(deleteResponse.status());
    expect.soft(deleteResponse.status()).toBe(200);
    console.log(deleteResponse.statusText());
    expect.soft(deleteResponse.statusText()).toBe('OK');

    const deleteResponseJson = await deleteResponse.json();

    console.log(deleteResponseJson.message );
    expect.soft(deleteResponseJson.message ).
        toBe( `Object with id = ${jsonResponse.id} has been deleted.` );
} );



