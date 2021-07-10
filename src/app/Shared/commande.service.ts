import { Commande } from './../Model/Commande';
import { HttpClient } from '@angular/common/http';
import { Oeuvre } from './../Model/Oeuvre';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  constructor(private http: HttpClient) {}
  getCommande() {
    return this.http.get<Commande[]>('http://127.0.0.1:8000/commande/');
  }
  getCommandeById(i: number) {
    return this.http.get<Commande>('http://127.0.0.1:8000/commande/' + i);
  }

  postCommande(commande: Commande, idClient: number, idOeuvre: number) {
    return this.http.post(
      'http://127.0.0.1:8000/commande/addCommandejson/new?idClient=' +
        idClient +
        '&idOeuvre=' +
        idOeuvre,
      commande
    );
  }

  deleteCommande(id: number) {
    return this.http.delete(
      'http://127.0.0.1:8000/commande/deleteCommandeJSON/' + id
    );
  }

  confirmCommande(commandes: Array<Commande>) {
    return this.http.get(
      'http://127.0.0.1:8000/commande/confirmCommandeJSON/ '/* ,
      commandes */
    );
  }
  getAllCommande(){
    return this.http.get<Commande[]>('http://127.0.0.1:8000/commande/alljson');
  }
}
