import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-destaque03',
  templateUrl: './dialog-destaque03.component.html',
  styleUrls: ['./dialog-destaque03.component.scss']
})
export class DialogDestaque03Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDestaque03Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}

  fecharDialog(): void {
    this.dialogRef.close();
  }

}
