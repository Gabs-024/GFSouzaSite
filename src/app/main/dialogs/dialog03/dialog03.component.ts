import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog03',
  templateUrl: './dialog03.component.html',
  styleUrls: ['./dialog03.component.scss']
})
export class Dialog03Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Dialog03Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}

  fecharDialog(): void {
    this.dialogRef.close();
  }

}
