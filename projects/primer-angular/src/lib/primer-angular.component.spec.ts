import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerAngularComponent } from './primer-angular.component';

describe('PrimerAngularComponent', () => {
  let component: PrimerAngularComponent;
  let fixture: ComponentFixture<PrimerAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
