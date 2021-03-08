import { Incubator } from "./incubator.model";

interface IFarmer {
    MANAGER_INCUBATOR_LIMITE: number;
    EMPLOYEE_INCUBATOR_LIMTE: number;
    isManager: boolean;
    isWorking: boolean;
    incubators: Incubator[];
}

export class Farmer implements IFarmer {
    MANAGER_INCUBATOR_LIMITE: number;
    EMPLOYEE_INCUBATOR_LIMTE: number;
    isManager: boolean;
    isWorking: boolean;
    incubators: Incubator[];

    constructor() {
        
    }
}