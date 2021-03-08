import { User } from "../assets/models/user.model";
import { Service } from "./service.template";
export class AuthService extends Service {
    public static user: User;
    constructor() {
        super();
    }

    static load() {
        const session = sessionStorage.getItem('otend_user');
        if(session != null) {
            AuthService.user = JSON.parse(session);
        } else {
            const local = localStorage.getItem('otend_user');
            if(local != null) {
                AuthService.user = JSON.parse(local);
            }
        }
    }

    async login(user:User) {
        const response = await this.post("user/login", user);
        const unpack = await response.text();
        if(unpack.length > 0) {
            AuthService.user = JSON.parse(unpack);
        } else {
            AuthService.user = null;
        }
    }

    async signup(user:User) {
        const response = await this.post("user", user);
        console.log(await response.json());
    }

    static logout() {
        sessionStorage.clear();
        localStorage.clear();
        AuthService.user = null;
    }
}