import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/Pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  baseApiUrl: string = environment.baseApiUrl;

  status: string[] = ['Desatualizado', 'Cadastrado', 'Sem cadastro'];


  constructor(private http: HttpClient) { }

  public getAllPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseApiUrl + '/api/Pessoa');
  }

  public addPessoa(addPessoaRequest: Pessoa): Observable<Pessoa> {
    addPessoaRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Pessoa>(this.baseApiUrl + '/api/Pessoa',
      addPessoaRequest);
  }

  public getPessoa(id: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.baseApiUrl + '/api/Pessoa/' + id);
  }

  public updatePessoa(id: string, updatedPessoaRequest: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.baseApiUrl + '/api/Pessoa/' + id,
      updatedPessoaRequest);
  }

  public deletePessoa(id: string): Observable<Pessoa> {
    return this.http.delete<Pessoa>(this.baseApiUrl + '/api/Pessoa/' + id);
  }
}
