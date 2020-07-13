import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:'app-addempleado',
  templateUrl:'./addempleado.component.html',
  styleUrls:['./addempleado.component.css']
})
export class AddempleadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ListarEmpleado(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(['listarempleado']);
  }
  NuevoEmpleado(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(['addempleado']);
  }
  
}
