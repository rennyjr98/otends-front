import { AuthService } from '@/services/auth.service'

export default function ({ redirect }) {
    AuthService.load();
    if (AuthService.user == null) {
        return redirect('/sessions?login=true');
    }
}