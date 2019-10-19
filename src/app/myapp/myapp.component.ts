import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {
  @Input() nameUser
    name : string;

    age : number;
    adress : {
      street : string,
      city : string
    };

    hobbies : string[];
  
  constructor() { 
    this.name = "David";
    this.age = 30;

    this.adress = {
      street : "El manzano",
      city : "Valparaiso"
    }

    this.hobbies = ["Programar", "Videojuegos", "Series", "Peliculas"];

  }

  ngOnInit() {
  }

}
