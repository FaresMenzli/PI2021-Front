import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {

  constructor( private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }
  showOeuvres(){

    this.router.navigate(['oeuvres'],{relativeTo: this.route})
  }
  showPanier(){

    this.router.navigate(['panier'],{relativeTo: this.route})
  }

}
