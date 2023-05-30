import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  enviar(dados: Contato): Observable<Contato> {
    return this.http.post<Contato>(
      `${API_PATH}users`,
      dados
    );
  }
}
