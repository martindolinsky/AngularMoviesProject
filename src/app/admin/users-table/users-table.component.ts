import {Component, OnInit} from '@angular/core';
import {User} from '../../entities/User';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
    users: User[];


    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(
            data => {
                this.users = data;
            },
            err => {
                this.users = JSON.parse(err.error).message;
            }
        );
    }

    deleteUser(user: User): void {
        this.userService.deleteUser(user).subscribe(ok => {
            this.users = this.users.filter(u => u !== user);
        });
    }
}
