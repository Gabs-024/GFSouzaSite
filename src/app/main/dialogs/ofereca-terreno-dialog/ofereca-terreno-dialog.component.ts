import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Contato } from 'src/app/models/contato.component';
import { ContatoService } from 'src/app/service/contato.service';
import { MensagemEnviadaComponent } from '../validacoes/mensagem-enviada/mensagem-enviada.component';

@Component({
  selector: 'app-ofereca-terreno-dialog',
  templateUrl: './ofereca-terreno-dialog.component.html',
  styleUrls: ['./ofereca-terreno-dialog.component.scss'],

})
export class OferecaTerrenoDialogComponent implements OnInit {
  public formBuilder: FormBuilder;
  public formOferecaTerreno: FormGroup


  constructor(public dialogRef: MatDialogRef<OferecaTerrenoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, formBuilder: FormBuilder, private contato: ContatoService) {
      this.formBuilder = formBuilder;
      this.formOferecaTerreno = formBuilder.group({
        Nome: [''],
        Email: [''],
        Telefone: [''],
        Mensagem: [''],
      });
    }
    
  ngOnInit(): void {
    console.log(this.formOferecaTerreno);
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }

  mensagemEnviadaDialog() {
    if(this.formOferecaTerreno.status == "VALID") {
      this.dialog.open(MensagemEnviadaComponent, {});
    }
  }

  fechouOfereca(): void {
    if(this.formOferecaTerreno.status == "INVALID") {
        window.location.reload();
      }
  }
}
