import { Oeuvre } from './Oeuvre';
import { Client } from './Client';
export class Commande {
  id:number
  client : Client
  oeuvre: Oeuvre[]
  done:boolean
  dateCommande:Date

}
