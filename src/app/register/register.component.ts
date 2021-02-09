import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {SnackbarService} from '../services/snackbar.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    exists: boolean;

    constructor(private authService: AuthService, private router: Router, private snackbarService: SnackbarService) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.authService.register(this.form).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.router.navigateByUrl('/login');
                this.snackbarService.successMsg('Successfully registered');
            },
            err => {
                this.errorMessage = err.error.message;
                console.log(this.errorMessage);
                console.log(err);
                console.log(err.error.message);
                this.isSignUpFailed = true;
            }
        );
    }

}
