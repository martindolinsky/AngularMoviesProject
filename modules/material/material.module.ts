import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    declarations: [],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatSnackBarModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {
}

