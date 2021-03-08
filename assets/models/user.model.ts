export interface IUser {
    id:string;
    name: string;
    email: string;
    nameCompany: string;
    typeCompany: number;
    password:string;
    active:boolean;
}

export class User implements IUser {
    id:string;
    name: string;
    email: string;
    nameCompany: string;
    typeCompany: number;
    password:string;
    active:boolean;

    constructor() {
        this.email = "";
        this.password = "";
        this.active = true;
    }
}