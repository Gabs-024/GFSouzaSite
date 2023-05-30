import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDestaque01Component } from './dialog-destaque01.component';

describe('DialogDestaque01Component', () => {
  let component: DialogDestaque01Component;
  let fixture: ComponentFixture<DialogDestaque01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDestaque01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDestaque01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
