import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog01',
  templateUrl: './dialog01.component.html',
  styleUrls: ['./dialog01.component.scss']
})
export class Dialog01Component {

  constructor(public dialogRef: MatDialogRef<Dialog01Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  fecharDialog(): void {
    this.dialogRef.close();
  }

}
