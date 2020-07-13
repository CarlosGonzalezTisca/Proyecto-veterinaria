import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarempleado',
  templateUrl: './listarempleado.component.html',
  styleUrls: ['./listarempleado.component.css']
})
export class ListarempleadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ListarEmpleadoUno(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarempleado"]);
  }
  NuevoEmpleadoUno(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addempleado"]);
  }
  EditarEmpleado(){
    this.router.navigate(["editarempleado"]);
  }

}
