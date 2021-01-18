import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';

export class CrudService<T> {
  constructor(protected http: HttpClient, private API_URL: string) {}

  listAll(): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL).pipe(
      delay(2000) //fins de exemplo
      //tap(console.log)
    );
  }

  loadById(id: number): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T): any {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(id: any, record: T): any {
    return this.http.put(`${this.API_URL}/${id}`, record).pipe(take(1));
  }

  save(id: any, record: T): any {
    if (id > 0) {
      return this.update(id, record);
    } else {
      return this.create(record);
    }
  }

  remove(id: number): any {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
