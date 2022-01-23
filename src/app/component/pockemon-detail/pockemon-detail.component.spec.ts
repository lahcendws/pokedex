import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonDetailComponent } from './pockemon-detail.component';

describe('PockemonDetailComponent', () => {
  let component: PockemonDetailComponent;
  let fixture: ComponentFixture<PockemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PockemonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
