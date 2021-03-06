import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    currentUser: any;
    adminRole = 'ROLE_ADMIN';


    constructor(private tokenStorageService: TokenStorageService) {
    }

    ngOnInit(): void {
        this.currentUser = this.tokenStorageService.getUser();
    }

}
