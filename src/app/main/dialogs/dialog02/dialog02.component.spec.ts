import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog02Component } from './dialog02.component';

describe('Dialog02Component', () => {
  let component: Dialog02Component;
  let fixture: ComponentFixture<Dialog02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialog02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialog02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
