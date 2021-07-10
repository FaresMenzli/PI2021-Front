import { Oeuvre } from './Oeuvre';
import { Client } from './Client';
export class Commande {
  id:number
  client : Client
  Oeuvre:  Array<Oeuvre> /* Oeuvre [] */
  done:boolean
  dateCommande:Date

}
