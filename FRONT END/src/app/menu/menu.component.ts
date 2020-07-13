import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Listar(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listar"]);
  }
  ListarEmpleado(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarempleado"]);
  }
  ListarJaula(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarjaula"]);
  }
  ListarMascota(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarmascota"]);
  }
  ListarUsuario(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarusuario"]);
  }
}
