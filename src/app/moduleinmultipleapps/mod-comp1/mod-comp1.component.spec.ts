import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModComp1Component } from './mod-comp1.component';

describe('ModComp1Component', () => {
  let component: ModComp1Component;
  let fixture: ComponentFixture<ModComp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModComp1Component]
    });
    fixture = TestBed.createComponent(ModComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
