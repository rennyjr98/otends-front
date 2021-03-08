import { OThread } from "./othread.model";

interface IPredictModel {
    othread: OThread;
    pCase: string[];
    results: number[];
}

export class PredictModel implements IPredictModel {
    othread: OThread;
    pCase: string[];
    results: number[];
    constructor() {
        
    }
}