import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp2Comp1Component } from './exp2-comp1.component';

describe('Exp2Comp1Component', () => {
  let component: Exp2Comp1Component;
  let fixture: ComponentFixture<Exp2Comp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exp2Comp1Component]
    });
    fixture = TestBed.createComponent(Exp2Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
