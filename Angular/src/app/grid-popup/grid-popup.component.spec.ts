import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPopupComponent } from './grid-popup.component';

describe('GridPopupComponent', () => {
  let component: GridPopupComponent;
  let fixture: ComponentFixture<GridPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
