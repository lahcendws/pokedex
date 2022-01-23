import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockedexPageComponent } from './pockedex-page.component';

describe('PockedexPageComponent', () => {
  let component: PockedexPageComponent;
  let fixture: ComponentFixture<PockedexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PockedexPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PockedexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
