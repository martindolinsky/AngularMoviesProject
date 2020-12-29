import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TvseriesTableComponent} from './tvseries-table.component';

describe('TvseriesTableComponent', () => {
    let component: TvseriesTableComponent;
    let fixture: ComponentFixture<TvseriesTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TvseriesTableComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TvseriesTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
