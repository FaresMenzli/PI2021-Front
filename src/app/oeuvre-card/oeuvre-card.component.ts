import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from './../Model/Commande';
import { CommandeService } from './../Shared/commande.service';
import { OeuvreService } from './../Shared/oeuvre.service';
import { Oeuvre } from './../Model/Oeuvre';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-oeuvre-card',
  templateUrl: './oeuvre-card.component.html',
  styleUrls: ['./oeuvre-card.component.css']
})
export class OeuvreCardComponent implements OnInit {
  @Input()oeuvre:Oeuvre ;
  commande : Commande
  idClient : number
  idOeuvre : number
  constructor( private router : Router, private route : ActivatedRoute ,private OeuvreService : OeuvreService, private CommandeService:CommandeService , ) { }

  ngOnInit(): void {
  }


  Commander(i){


    console.log(this.getOeuvre(i).id)
    this.idOeuvre=this.getOeuvre(i).id
    this.idClient=1
/*     this.commande.Oeuvre.push(this.oeuvre)
    this.commande.client.id=1 */


    this.CommandeService.postCommande(this.commande ,this.idClient , this.idOeuvre).subscribe()
    setTimeout(() => {
     /*  this.router.navigate(['oeuvres'] ,{relativeTo: this.route} ) */
     window.location.reload();
    }, 500);



  }
getOeuvre(i: number){

    this.OeuvreService.getOeuvreById(i).subscribe(
      (data: Oeuvre) => this.oeuvre = data);

      return this.oeuvre

/* setTimeout(() => {
  console.log(this.oeuvre)
}, 1000);
    this.OeuvreService.getOeuvreById().subscribe(
      (data: Oeuvre) => this.oeuvre = data);

    console.log(object) */
  }


}
