import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-destaque01',
  templateUrl: './dialog-destaque01.component.html',
  styleUrls: ['./dialog-destaque01.component.scss']
})

export class DialogDestaque01Component {

  constructor(public dialogRef: MatDialogRef<DialogDestaque01Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  fecharDialog(): void {
    this.dialogRef.close();
  }

}
