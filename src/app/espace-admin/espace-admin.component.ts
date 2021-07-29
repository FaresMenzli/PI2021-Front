import { CommandeService } from './../Shared/commande.service';
import { Commande } from './../Model/Commande';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css'],
})
export class EspaceAdminComponent implements OnInit {
  commandes: Commande[];
  search  : string
  firstDate : Date
  secondDate : Date

  csrSort = false;
  oeuvreSort =false
  dateSort=false
  doneSort=false
  nbNotDone
  nbDone
  pourcentage

  constructor(private CommandeService: CommandeService) {}

  ngOnInit(): void {
    this.CommandeService.getAllCommande().subscribe(
      (data: Commande[]) => (this.commandes = data)
    );
    setTimeout(() => {
     this.nbNotDone = this.commandes.filter(commande=> commande.done==false).length
     this.nbDone = this.commandes.filter(commande=> commande.done==true).length
     this.pourcentage= ((this.nbDone/this.commandes.length)*100).toFixed(2)
    }, 2000);


    setTimeout(() => {
      console.log(this.commandes);
    }, 2000);
  }
  sortByCsr() {
    if (this.csrSort == false) {
      this.csrSort = true;
      this.commandes.sort(function (a, b) {
        return a.client.name.localeCompare(b.client.name);
      });
    }
    else {
      this.csrSort = false;
      this.commandes.sort(function (a, b) {
        return b.client.name.localeCompare(a.client.name);
      });
    }
    console.log(this.commandes);
  }
  sortByOeuvre() {
    if (this.oeuvreSort == false) {
      this.oeuvreSort = true;
      this.commandes.sort(function (a, b) {
        return a.Oeuvre[0].nameOeuvre.localeCompare(b.Oeuvre[0].nameOeuvre);
      });
    }
    else {
      this.oeuvreSort = false;
      this.commandes.sort(function (a, b) {
        return b.Oeuvre[0].nameOeuvre.localeCompare(a.Oeuvre[0].nameOeuvre);
      });
    }
    this.commandes.sort();
  }
  sortByDate() {
    if (this.dateSort == false) {
      this.dateSort = true;
      this.commandes.sort(function (a, b) {

        return new Date(b.dateCommande).getTime() - new Date(a.dateCommande).getTime();
      });
    }
    else {
      this.dateSort = false;
      this.commandes.sort(function (a, b) {
        return new Date(a.dateCommande).getTime() - new Date(b.dateCommande).getTime();

      });
    }
  }
  sortByDone(){
    if (this.doneSort == false) {
      this.doneSort = true;
      this.commandes.sort(function (a, b) {

        return a.done.toString().localeCompare( b.done.toString())


      });
    }
    else {
      this.doneSort = false;
      this.commandes.sort(function (a, b) {
        return b.done.toString().localeCompare( a.done.toString())


      });
    }
  }

  }

