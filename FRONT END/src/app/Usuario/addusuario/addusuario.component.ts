import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
