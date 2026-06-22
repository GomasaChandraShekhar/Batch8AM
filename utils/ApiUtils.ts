import { expect, APIRequestContext, APIResponse } from '@playwright/test';


export default class ApiUtils {

    readonly apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }

    async postRequest(url: string, payload: any): Promise<APIResponse> {

        const response = await this.apiContext.post(url,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
        );
        return response;
    }

    async getAllResources(url: string) {
        const response = await this.apiContext.get(url);
        return response;
    }

    async getOneResource(url: string, id: string) {
        const response = await this.apiContext.get(url + '/' + id);
        return response;

    }

    async putRequest(url: string, id: string, payload: any) {

        const response = await this.apiContext.put(url + '/' + id,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
        );

        return response;

    }

    async patchRequest(url: string, id: string, payload: any){

        const response = await this.apiContext.patch(url + '/' + id,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
        );

        return response;
    }

    async deleteRequest(url: string, id: string){
        const response = await this.apiContext.delete(url + '/' + id);
        
        return response;
    }

}
