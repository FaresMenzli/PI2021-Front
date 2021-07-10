import { CommandeService } from './../Shared/commande.service';
import { Commande } from './../Model/Commande';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {
  commandes: Commande[];

  constructor(private CommandeService :CommandeService) { }

  ngOnInit(): void {

    this.CommandeService.getAllCommande().subscribe(
    (data: Commande[]) => (this.commandes = data)
  );

  setTimeout(() => {

    console.log(this.commandes)

  }, 2000);

  }


}
