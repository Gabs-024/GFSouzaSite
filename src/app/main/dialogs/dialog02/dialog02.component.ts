import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog02',
  templateUrl: './dialog02.component.html',
  styleUrls: ['./dialog02.component.scss']
})
export class Dialog02Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Dialog02Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}

  fecharDialog(): void {
    this.dialogRef.close();
  }

}
