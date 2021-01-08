import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VereficaEmailService {

  constructor(private http: HttpClient) { }

  vereficarEmail(email: string): any {
    return this.http.get('assets/dados/email.json').pipe(
      delay(3000),
      map((dados: any) => dados.emails),
      // tap(console.log),
      map((data: { email: string }[]) => data.filter(v => v.email === email)),
      // tap(console.log),
      map((d: any[]) => d.length > 0),
      // tap(console.log),
    );
  }

}
