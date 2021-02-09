import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {
    }

    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            if (this.tokenStorage.getUser().roles.toString() === 'ROLE_ADMIN') {
                console.log(this.tokenStorage.getUser().roles);
                return true;
            } else {
                this.router.navigate(['/home']);
                return false;
            }
        }
    }


}
