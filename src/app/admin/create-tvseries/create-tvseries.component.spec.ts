import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateTvseriesComponent} from './create-tvseries.component';

describe('CreateTvseriesComponent', () => {
    let component: CreateTvseriesComponent;
    let fixture: ComponentFixture<CreateTvseriesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateTvseriesComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateTvseriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
