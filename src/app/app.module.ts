import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Dialog01Component } from './main/dialogs/dialog01/dialog01.component';
import { Dialog02Component } from './main/dialogs/dialog02/dialog02.component';
import { Dialog03Component } from './main/dialogs/dialog03/dialog03.component';
import { DialogDestaque01Component } from './main/dialogs/dialog-destaque01/dialog-destaque01.component';
import { DialogDestaque02Component } from './main/dialogs/dialog-destaque02/dialog-destaque02.component';
import { DialogDestaque03Component } from './main/dialogs/dialog-destaque03/dialog-destaque03.component';
import { OferecaTerrenoDialogComponent } from './main/dialogs/ofereca-terreno-dialog/ofereca-terreno-dialog.component';
import { MensagemEnviadaComponent } from './main/dialogs/validacoes/mensagem-enviada/mensagem-enviada.component';

@NgModule({
  declarations: [
    AppComponent,
    Dialog01Component,
    Dialog02Component,
    Dialog03Component,
    DialogDestaque01Component,
    DialogDestaque02Component,
    DialogDestaque03Component,
    MensagemEnviadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
