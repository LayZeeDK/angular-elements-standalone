import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerElementsComponent } from './primer-elements.component';

describe('PrimerElementsComponent', () => {
  let component: PrimerElementsComponent;
  let fixture: ComponentFixture<PrimerElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
