import { Farmer } from "./farmer.model";
import { OThread } from "./othread.model";

interface IFarm {
    FARMER_LIMIT: number;
    ON_HOLD_OTHREADS_LIMIT: number;
    MANAGER_LIMIT: number;
    nManagers: number;
    isOpen: boolean;
    farmers: Farmer[];
    onHoldOThreads: OThread[];
}

export class Farm implements IFarm {
    FARMER_LIMIT: number;
    ON_HOLD_OTHREADS_LIMIT: number;
    MANAGER_LIMIT: number;
    nManagers: number;
    isOpen: boolean;
    farmers: Farmer[];
    onHoldOThreads: OThread[];
    
    constructor() {

    }
}