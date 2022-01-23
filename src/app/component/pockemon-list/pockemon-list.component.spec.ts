import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonListComponent } from './pockemon-list.component';

describe('PockemonListComponent', () => {
  let component: PockemonListComponent;
  let fixture: ComponentFixture<PockemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PockemonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
