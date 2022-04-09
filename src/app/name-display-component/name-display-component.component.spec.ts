import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDisplayComponentComponent } from './name-display-component.component';

describe('NameDisplayComponentComponent', () => {
  let component: NameDisplayComponentComponent;
  let fixture: ComponentFixture<NameDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameDisplayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
