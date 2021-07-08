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
  constructor( OeuvreService : OeuvreService) { }

  ngOnInit(): void {
  }

  getOeuvre(i){

    /* this.OeuvreService.getOeuvreById().subscribe(
      (data: Oeuvre) => this.oeuvre = data);

    console.log(object) */
  }

}
