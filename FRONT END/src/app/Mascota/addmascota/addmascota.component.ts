import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmascota',
  templateUrl: './addmascota.component.html',
  styleUrls: ['./addmascota.component.css']
})
export class AddmascotaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ListarMascota(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarmascota"]);
  }
  NuevoMascota(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addmascota"]);
  }
}
