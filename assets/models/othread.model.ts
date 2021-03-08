import { User } from "./user.model";
import { RawDataCfg } from './rawdatacfg.model';
import { AuthService } from "~/services/auth.service";

interface IOThread {
    name:string;
    owner:User;
    cfg:RawDataCfg;
    active:boolean;
}

export class OThread implements IOThread {
    name: string;
    owner: User;
    cfg: RawDataCfg;
    active:boolean;
    constructor() {
        this.owner = AuthService.user;
        this.cfg = new RawDataCfg();
        this.active = true;
    }
}