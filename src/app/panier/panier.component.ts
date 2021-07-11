import {Commande} from "./../Model/Commande";
import {CommandeService} from "./../Shared/commande.service";
import {Component, OnInit} from "@angular/core";

@Component({selector: "app-panier", templateUrl: "./panier.component.html", styleUrls: ["./panier.component.css"]})
export class PanierComponent implements OnInit {
  tab = new Array();
  total = 0;

  commandes: Commande[];
  constructor(private CommandeService : CommandeService) {}

  ngOnInit(): void {
    //test filter
    /* setTimeout(() => {
       let result =this.commandes.filter(item => item.Oeuvre[0].id==1 )
    console.log(result)
    }, 1000); */

    this.CommandeService.getCommande().subscribe((data : Commande[]) => (this.commandes = data));

    setTimeout(() => {
      for (let i = 0; i < this.commandes.length; i++) {
        this.total = this.total + this.commandes[i].Oeuvre[0].price;
        console.log(this.commandes[i].Oeuvre[0].price);
      }
      console.log(this.commandes[0].Oeuvre[0].id);
    }, 2000);
  }

  Delete(id : number) {
    this.CommandeService.deleteCommande(id).subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  passerCommande() {
    let idCommande = new Array();
    if (confirm("Voulez-vous cconfirmer votre Commande , le prix est " + this.total + " ?")) {
      for (let i = 0; i < this.commandes.length; i++) {
        console.log(this.commandes[i].Oeuvre[0].id);
        if (idCommande.includes(this.commandes[i].Oeuvre[0].id))
          continue;
        else {
          idCommande.push(this.commandes[i].Oeuvre[0].id);
          console.log("ici" + idCommande);

          let result = this.commandes.filter((item) => item.Oeuvre[0].id == this.commandes[i].Oeuvre[0].id);
          if (result.length > this.commandes[i].Oeuvre[0].quantity) {
            return alert(" enti cmandit" + result.length + "men" + this.commandes[i].Oeuvre[0].nameOeuvre + "w a7na 3ana ken" + this.commandes[i].Oeuvre[0].quantity);
          } else
            continue;
          }
        }

    // Clic sur OK confirm commande
    this.CommandeService.confirmCommande(this.commandes).subscribe();
    console.log(this.commandes);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  else alert("alah le chrit")
  }
}
