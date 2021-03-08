import { Farm } from "~/assets/models/farm.model";
import { Service } from "./service.template";

export class FarmService extends Service {
    constructor() {
        super();
    }

    async getAll(): Promise<Farm[]> {
        const response = await this.get('farm/');
        const json = await response.text();
        if(json.length > 0) {
            console.log(json);
            return JSON.parse(json);
        }
        return [];
    }
}