import { Oeuvre } from './../Model/Oeuvre';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {

  constructor(private http : HttpClient) {   }
  getOeuvres(){
    return this.http.get<Oeuvre[]>("http://127.0.0.1:8000/oeuvre/")

  }
  getOeuvreById(i : number){

    return this.http.get<Oeuvre>('http://127.0.0.1:8000/oeuvre/'+i)

  }
}
