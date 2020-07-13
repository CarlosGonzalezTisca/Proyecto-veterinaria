import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  EditarUsuario(){
    this.router.navigate(["editarusuario"]);
  }
  ListarUsuario(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarusuario"]);
  }
  NuevoUsuario(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addusuario"]);
  }
}