import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp1Comp1Component } from './exp1-comp1.component';

describe('Exp1Comp1Component', () => {
  let component: Exp1Comp1Component;
  let fixture: ComponentFixture<Exp1Comp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exp1Comp1Component]
    });
    fixture = TestBed.createComponent(Exp1Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
