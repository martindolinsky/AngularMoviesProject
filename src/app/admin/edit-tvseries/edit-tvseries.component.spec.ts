import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditTvseriesComponent} from './edit-tvseries.component';

describe('EditTvseriesComponent', () => {
    let component: EditTvseriesComponent;
    let fixture: ComponentFixture<EditTvseriesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditTvseriesComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditTvseriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
