import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Classic2Component } from './classic2.component';

describe('Classic2Component', () => {
  let component: Classic2Component;
  let fixture: ComponentFixture<Classic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Classic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Classic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
