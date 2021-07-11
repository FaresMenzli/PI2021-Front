import { CommandeService } from './../Shared/commande.service';
import { Commande } from './../Model/Commande';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  commandes:Commande[]
  constructor( private router : Router, private route : ActivatedRoute , private CommandeService :CommandeService) { }

  ngOnInit(): void {
    this.CommandeService.getCommande().subscribe(
      (data: Commande[]) => (this.commandes = data)
    );
  }
  showOeuvres(){


    this.router.navigate(['oeuvres'],{relativeTo: this.route})
  }
  showPanier(){

    this.router.navigate(['panier'],{relativeTo: this.route})
  }

}
