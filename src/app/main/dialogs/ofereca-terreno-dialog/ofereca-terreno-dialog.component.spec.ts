import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OferecaTerrenoDialogComponent } from './ofereca-terreno-dialog.component';

describe('OferecaTerrenoDialogComponent', () => {
  let component: OferecaTerrenoDialogComponent;
  let fixture: ComponentFixture<OferecaTerrenoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OferecaTerrenoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OferecaTerrenoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
