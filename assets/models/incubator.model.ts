import { OThread } from "./othread.model";

interface IIncubator {
    SIZE: number;
    ON_LIFE: number;
    MEMORYWIDTH: number;
    othreads: OThread[];
}

export class Incubator implements IIncubator {
    SIZE: number;
    ON_LIFE: number;
    MEMORYWIDTH: number;
    othreads: OThread[];

    constructor() {
        
    }
}