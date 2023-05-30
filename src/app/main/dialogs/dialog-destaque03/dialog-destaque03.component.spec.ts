import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDestaque03Component } from './dialog-destaque03.component';

describe('DialogDestaque03Component', () => {
  let component: DialogDestaque03Component;
  let fixture: ComponentFixture<DialogDestaque03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDestaque03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDestaque03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
