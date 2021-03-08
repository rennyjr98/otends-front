export class Service {
    private apiVersion:number = 1;
    private baseurl:string = `http://localhost:8080/api/v${this.apiVersion}/`;

    constructor(apiVersion:number = 1) {
        this.apiVersion = apiVersion;
    }

    get(path:string, ):Promise<any> {
        let opt = { method:"GET" };
        return this._execute(path, opt);
    }

    post(path:string, data:any):Promise<any> {
        let opt = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return this._execute(path, opt);
    }

    private _execute(path:string, opt:object) {
        return fetch(this.baseurl + path, opt);
    }
}