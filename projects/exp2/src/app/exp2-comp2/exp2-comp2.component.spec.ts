import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp2Comp2Component } from './exp2-comp2.component';

describe('Exp2Comp2Component', () => {
  let component: Exp2Comp2Component;
  let fixture: ComponentFixture<Exp2Comp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exp2Comp2Component]
    });
    fixture = TestBed.createComponent(Exp2Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
