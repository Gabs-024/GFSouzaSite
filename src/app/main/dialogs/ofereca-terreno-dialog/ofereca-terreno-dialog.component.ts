import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MensagemEnviadaComponent } from '../validacoes/mensagem-enviada/mensagem-enviada.component';
import { Contato } from 'src/app/models/contato.component';
import { EnviarEmailService } from 'src/app/services/enviar-email.service';

@Component({
  selector: 'app-ofereca-terreno-dialog',
  templateUrl: './ofereca-terreno-dialog.component.html',
  styleUrls: ['./ofereca-terreno-dialog.component.scss'],

})
export class OferecaTerrenoDialogComponent implements OnInit {
  public formBuilder: FormBuilder;
  public formOferecaTerreno: FormGroup


  constructor(public dialogRef: MatDialogRef<OferecaTerrenoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, formBuilder: FormBuilder, private contato: EnviarEmailService) {
      this.formBuilder = formBuilder;
      this.formOferecaTerreno = formBuilder.group({
        remetente: ['contatoconstrutoragfsouza@gmail.com'],
        destinatario: ['gfsouzaconstrucoes@gmail.com'],
        assunto: ['Mensagem de Oferecer terreno - Site GFSouza'],
        nome: [''],
        email: [''],
        telefone: [''],
        mensagem: [''],
      });
    }
    
  ngOnInit(): void {
    console.log(this.formOferecaTerreno);
  }

  // Enviar formulario

  enviarFormulario() {
    const contatoDestaque: Contato = this.formOferecaTerreno.value;
        this.contato.enviarEmail(contatoDestaque).subscribe(
            data => {
                console.log(data);
            }, error => {
                console.error(error);
            }
        );
    }

  fecharDialog(): void {
    this.dialogRef.close();
  }

  mensagemEnviadaDialog() {
    if(this.formOferecaTerreno.status == "VALID") {
      this.dialog.open(MensagemEnviadaComponent, {});
    }
  }
}
