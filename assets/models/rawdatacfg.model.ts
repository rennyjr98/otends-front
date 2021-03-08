interface IRawDataCfg {
    isBinary:boolean;
    isInvert:boolean;
    isPublic:boolean;
    isAuto:boolean;
    isClassificator:boolean;
    inputRows: number;
    outputRows:number;
    cols:number;
    inputLabels:string[];
    outputLabels:string[];
    apiURL:string;
    active:boolean;
}

export class RawDataCfg implements IRawDataCfg {
    isBinary: boolean;
    isInvert: boolean;
    isPublic: boolean;
    isAuto:boolean;
    isClassificator: boolean;
    inputRows: number;
    outputRows:number;
    cols: number;
    inputLabels:string[];
    outputLabels:string[];
    apiURL: string;
    active:boolean;
    
    constructor() {
        this.isBinary = false;
        this.isInvert = false;
        this.isPublic = true;
        this.isClassificator = false;
        this.inputRows = 2;
        this.outputRows = 1;
        this.inputLabels = [];
        this.outputLabels = [];
        this.active = true;
    }
}