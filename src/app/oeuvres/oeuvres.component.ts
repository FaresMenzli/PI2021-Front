import { OeuvreService } from './../Shared/oeuvre.service';
import { Oeuvre } from './../Model/Oeuvre';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oeuvres',
  templateUrl: './oeuvres.component.html',
  styleUrls: ['./oeuvres.component.css']
})
export class OeuvresComponent implements OnInit {
oeuvres:Oeuvre[]
  constructor(private OeuvreService : OeuvreService) { }

  ngOnInit(): void {
   /*  this.oeuvres=[
      {id: 1,nameOeuvre: "1st", quantity:2, photo:"https://cdn.shopify.com/s/files/1/0532/2477/products/test-product.jpg", price: 18},
      {id:2,nameOeuvre: "2nd",quantity:2,photo:"https://cdn.shopify.com/s/files/1/0532/2477/products/test-product.jpg", price: 21 },
      {id:3,nameOeuvre: "3rd",quantity:2,photo:"https://cdn.shopify.com/s/files/1/0532/2477/products/test-product.jpg", price: 16},
    ] */

    this.OeuvreService.getOeuvres().subscribe(
      (data: Oeuvre[]) => this.oeuvres = data);


      setTimeout(() => {
          console.log(this.oeuvres[0])
      }, 1000);



  }

}
