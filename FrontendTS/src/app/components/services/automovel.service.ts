import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Automovel } from '../models/Automovel';



@Injectable({
  providedIn: 'root'
})
export class AutomovelService {

  baseApiUrl: string = environment.baseApiUrl;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  // to talk to external api need an http client
  constructor(private http: HttpClient, private router: Router) { }

  public getAllAutomovel(): Observable<Automovel[]> {
    return this.http.get<Automovel[]>(this.baseApiUrl + '/api/Automovel');
  }

  public addAutomovel(addAutomovelRequest: Automovel): Observable<Automovel> {
    addAutomovelRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Automovel>(this.baseApiUrl + '/api/Automovel',
      addAutomovelRequest);
  }

  getAutomovel(id: string): Observable<Automovel> {
    return this.http.get<Automovel>(this.baseApiUrl + '/api/Automovel/' + id);
  }

  public  updateAutomovel(id: string, updatedAutomovelRequest: Automovel): Observable<Automovel> {
    return this.http.put<Automovel>(this.baseApiUrl + '/api/Automovel/' + id,
      updatedAutomovelRequest);
  }

  public deleteAutomovel(id: Automovel['id']): Observable<Automovel> {
    return this.http.delete<Automovel>(this.baseApiUrl + '/api/Automovel/' + id, {headers: this.httpHeaders})
    .pipe( catchError( err => {
      this.router.navigate(['/automovel/add'])
      console.log(err.error.message);
      return throwError(() => new Error(err))
    } ))
  }
}
