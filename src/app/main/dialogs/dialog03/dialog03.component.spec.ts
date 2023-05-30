import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog03Component } from './dialog03.component';

describe('Dialog03Component', () => {
  let component: Dialog03Component;
  let fixture: ComponentFixture<Dialog03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialog03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialog03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
