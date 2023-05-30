import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDestaque02Component } from './dialog-destaque02.component';

describe('DialogDestaque02Component', () => {
  let component: DialogDestaque02Component;
  let fixture: ComponentFixture<DialogDestaque02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDestaque02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDestaque02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
