import { EnviarEmailService } from './../services/enviar-email.service';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog01Component } from './dialogs/dialog01/dialog01.component';
import { Dialog02Component } from './dialogs/dialog02/dialog02.component';
import { Dialog03Component } from './dialogs/dialog03/dialog03.component';
import { OferecaTerrenoDialogComponent } from './dialogs/ofereca-terreno-dialog/ofereca-terreno-dialog.component';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { DialogDestaque03Component } from './dialogs/dialog-destaque03/dialog-destaque03.component';
import { DialogDestaque02Component } from './dialogs/dialog-destaque02/dialog-destaque02.component';
import { DialogDestaque01Component } from './dialogs/dialog-destaque01/dialog-destaque01.component';
import { MensagemEnviadaComponent } from './dialogs/validacoes/mensagem-enviada/mensagem-enviada.component';
import { Contato } from '../models/contato.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss', './main2.scss',  './main3.scss', './tablet.scss', './mobile.scss', './tablet2.scss', './mobile2.scss'],
})
export class MainComponent implements OnInit {

    public formBuilder: FormBuilder;
    public formContatoDestaque: FormGroup;


    constructor(public dialog: MatDialog, formBuilder: FormBuilder, private contato: EnviarEmailService) {
        this.formBuilder = formBuilder;         
        this.formContatoDestaque = formBuilder.group({
            remetente: ['contatoconstrutoragfsouza@gmail.com'],
            destinatario: ['gfsouzaconstrucoes@gmail.com'],
            assunto: ['Mensagem de contato - Site GFSouza'],
            nome: [''],
            email: [''],
            telefone: [''],
            mensagem: [''],
        });
        
    }

    ngOnInit(): void {
        console.log(this.formContatoDestaque    )
    }

    menuOpen = false;

    // Funcoes dos dialogs

    openDialog1() {
        this.dialog.open(Dialog01Component, {});
    }
    openDialog2() {
        this.dialog.open(Dialog02Component, {});
    }
    openDialog3() {
        this.dialog.open(Dialog03Component, {});
    }

    openOferecaTerrenoDialog() {
        this.dialog.open(OferecaTerrenoDialogComponent, {});
    }

    openDialogDestaque01() {
        this.dialog.open(DialogDestaque01Component, {});
    }

    openDialogDestaque02() {
        this.dialog.open(DialogDestaque02Component, {});
    }

    openDialogDestaque03() {
        this.dialog.open(DialogDestaque03Component, {});
    }

    openOferecaDialog() {
        this.dialog.open(OferecaTerrenoDialogComponent, {});
    }

    mensagemEnviadaDialog() {
        if(this.formContatoDestaque.status == "VALID" ) {
        this.dialog.open(MensagemEnviadaComponent, {});
        }
    }

    // Função de abrir e fechar o menu hamburguer

    isFixedNavbar: any;

    @HostBinding('class.navbar-opened') navbarOpened = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset > 10) {
            this.isFixedNavbar = true;
        } else {
            this.isFixedNavbar = false;
        }
    }

    toggleNavbar() {
        this.navbarOpened = !this.navbarOpened;
    }

    // Enviar formulario

    enviarFormulario() {
    const contatoDestaque: Contato = this.formContatoDestaque.value;
        this.contato.enviarEmail(contatoDestaque).subscribe(
            data => {
                console.log(data);
            }, error => {
                console.error(error);
            }
        );
    }
}