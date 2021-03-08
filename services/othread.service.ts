import { AuthService } from '~/services/auth.service';
import { OThread } from "~/assets/models/othread.model";
import { Service } from "./service.template";
import { PredictModel } from '~/assets/models/predict.model';
import { text } from '@fortawesome/fontawesome-svg-core';

export class OThreadService extends Service {
    constructor() {
        super();
    }

    async add(othread: OThread) {
        await this.post('othread/', othread);
    }

    async getAll(): Promise<OThread[]> {
        const resp = await this.get('othread/');
        const txt = await resp.text();
        if(txt.length > 0) {
            return JSON.parse(txt);
        }
        return [];
    }

    async getByUser(): Promise<OThread[]> {
        const resp = await this.get(`othread/user/${AuthService.user.id}`);
        const txt = await resp.text();
        if(txt.length > 0) {
            return JSON.parse(txt);
        }
        return [];
    }

    async getPrediction(pModel:PredictModel): Promise<PredictModel> {
        const resp = await this.post('othread/predict', pModel);
        const txt = await resp.text();
        if(text.length > 0) {
            return JSON.parse(txt);
        }
        return null;
    }

    async sendFood(food:string[][], id:string) {
        await this.post(`othread/food/${id}`, food);
    }
}