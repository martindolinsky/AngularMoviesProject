import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
    role: string;

    constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {
    }


    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            if (this.tokenStorage.getUser().roles.toString() === 'ROLE_ADMIN') {
                console.log(this.tokenStorage.getUser().roles);
                return true;
            }
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }


    canLoad(): boolean {
        return true;
    }

}
