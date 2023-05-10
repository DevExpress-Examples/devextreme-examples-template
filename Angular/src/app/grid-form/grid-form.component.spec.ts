import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFormComponent } from './grid-form.component';

describe('GridFormComponent', () => {
  let component: GridFormComponent;
  let fixture: ComponentFixture<GridFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
