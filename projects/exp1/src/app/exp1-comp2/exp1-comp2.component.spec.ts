import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp1Comp2Component } from './exp1-comp2.component';

describe('Exp1Comp2Component', () => {
  let component: Exp1Comp2Component;
  let fixture: ComponentFixture<Exp1Comp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exp1Comp2Component]
    });
    fixture = TestBed.createComponent(Exp1Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
