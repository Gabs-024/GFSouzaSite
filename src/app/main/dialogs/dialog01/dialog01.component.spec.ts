import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog01Component } from './dialog01.component';

describe('Dialog01Component', () => {
  let component: Dialog01Component;
  let fixture: ComponentFixture<Dialog01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialog01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialog01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
