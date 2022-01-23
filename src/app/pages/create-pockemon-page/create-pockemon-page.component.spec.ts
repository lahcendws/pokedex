import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePockemonPageComponent } from './create-pockemon-page.component';

describe('CreatePockemonPageComponent', () => {
  let component: CreatePockemonPageComponent;
  let fixture: ComponentFixture<CreatePockemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePockemonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePockemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
