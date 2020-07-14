import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntervideosService {
apiurl: 'https://api.mat9.cl/cursos';
  constructor(private http: HttpClient) { }

  obtcurs() {
this.http.get(this.apiurl);
  }
}
