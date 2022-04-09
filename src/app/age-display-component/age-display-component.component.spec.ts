import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDisplayComponentComponent } from './age-display-component.component';

describe('AgeDisplayComponentComponent', () => {
  let component: AgeDisplayComponentComponent;
  let fixture: ComponentFixture<AgeDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDisplayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
