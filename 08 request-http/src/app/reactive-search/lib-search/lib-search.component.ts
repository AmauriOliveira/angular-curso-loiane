import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  map,
  tap,
  filter,
  distinctUntilChanged,
  debounceTime,
  switchMap,
} from 'rxjs/operators';

interface Result {
  description: string;
  homepage: string;
  latest: string;
  name: string;
  version: string;
}
@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss'],
})
export class LibSearchComponent implements OnInit {
  queryField = new FormControl();

  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';

  results$!: Observable<Result[]>;
  total!: number;

  readonly FIELDS = 'name,description,version,homepage';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges.pipe(
      map((search: string) => search.trim()),
      filter((search) => search.length > 1),
      debounceTime(300),
      distinctUntilChanged(),
      // tap((search) => console.log(search)),
      switchMap((search) =>
        this.http.get(this.SEARCH_URL, {
          params: {
            search,
            fields: this.FIELDS,
          },
        })
      ),
      tap((res: any) => (this.total = res.total)),
      // tap((res) => console.log(res)),
      map((res: any) => res.results)
    );
  }

  onSearch(): void {
    let search: string = this.queryField.value;
    let params = new HttpParams();
    params = params.set('search', search);
    params = params.set('fields', this.FIELDS);

    if (search && search.trim() !== '') {
      search = search.trim();

      /*     const params_ = {
        search,
        fields: this.FIELDS,
      }; */

      this.results$ = this.http.get(this.SEARCH_URL, { params }).pipe(
        tap((res: any) => (this.total = res.total)),
        map((res: any) => res.results)
      );
    }
  }
}
