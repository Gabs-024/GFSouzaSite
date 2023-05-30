import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-destaque02',
  templateUrl: './dialog-destaque02.component.html',
  styleUrls: ['./dialog-destaque02.component.scss']
})
export class DialogDestaque02Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDestaque02Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}

  fecharDialog(): void {
    this.dialogRef.close();
  }

}
