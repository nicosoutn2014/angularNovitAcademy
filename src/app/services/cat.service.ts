import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/cat';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})

export class CatService {

  baseUrl:string = '';

  constructor(
    private http: HttpClient,
    private jwtService: JwtService) {
    this.baseUrl = environment.baseUrl + 'Gatos';
   }

  getCats(){
    const options = 
     { headers: new HttpHeaders().set('token', this.jwtService.getJwt()) }
    return this.http.get<Cat[]>(this.baseUrl, options);
  }

  updateCat(cat: Cat){
    const options = 
     { headers: new HttpHeaders().set('token', '') }
    return this.http.put<Cat[]>(`${this.baseUrl}/Update/${cat.idGato}`, cat, options);
  }
}
