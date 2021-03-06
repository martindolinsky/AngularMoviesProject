import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {
    }

    ngOnInit(): void {

    }

    onSubmit(): void {
        this.dialogRef.close();
    }


    sendResult(result: boolean): void {
        this.dialogRef.close(result);
    }
}

export class ConfirmDialogData {
    constructor(
        public title: string,
        public message: string
    ) {
    }

}
