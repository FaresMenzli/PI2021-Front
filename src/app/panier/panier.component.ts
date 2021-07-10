import { Commande } from './../Model/Commande';
import { CommandeService } from './../Shared/commande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  tab = new Array();
  total = 0;

  commandes: Commande[];
  constructor(private CommandeService: CommandeService) {}

  ngOnInit(): void {
    this.CommandeService.getCommande().subscribe(
      (data: Commande[]) => (this.commandes = data)
    );

    setTimeout(() => {
      for (let i = 0; i < this.commandes.length; i++) {
        this.total = this.total + this.commandes[i].Oeuvre[0].price;
        console.log(this.commandes[i].Oeuvre[0].price);
      }
      console.log(this.commandes[0].Oeuvre[0]);
    }, 2000);
  }

  Delete(id: number) {
    this.CommandeService.deleteCommande(id).subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  passerCommande() {
    if (
      confirm(
        'Voulez-vous cconfirmer votre Commande , le prix est ' +
          this.total +
          ' ?'
      )
    ) {
      // Clic sur OK
      this.CommandeService.confirmCommande(this.commandes).subscribe()
      console.log(this.commandes);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
}
