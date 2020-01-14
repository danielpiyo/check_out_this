import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    return this.httpClient.post<any>(`${environment.baseUrl}/signin`, {email, password});
  }
}
