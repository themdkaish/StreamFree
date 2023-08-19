import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFetchingService {
  private jsonURL = 'assets/data/top-rated-indian-movies-02.json'; 

  constructor(private http: HttpClient) {}

  getJSONData(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}

