import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

  constructor(private http: HttpClient) { }

  enviarEmail(formContatoDestaque: any): Observable<any> {
    return this.http.post<any>('http://localhost:8081/api/enviar', formContatoDestaque);
  }
}
