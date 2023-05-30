import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensagem-enviada',
  templateUrl: './mensagem-enviada.component.html',
  styleUrls: ['./mensagem-enviada.component.scss']
})
export class MensagemEnviadaComponent {


  constructor(public dialogRef: MatDialogRef<MensagemEnviadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  fecharDialog(): void {
    this.dialogRef.close();
  }

  atualizaPagina(): void {
    window.location.reload();
  }
}
