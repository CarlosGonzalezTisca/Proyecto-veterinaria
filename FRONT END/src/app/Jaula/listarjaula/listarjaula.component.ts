import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarjaula',
  templateUrl: './listarjaula.component.html',
  styleUrls: ['./listarjaula.component.css']
})
export class ListarjaulaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ListarJaula(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarjaula"]);
  }
  NuevoJaula(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addjaula"]);
  }
  EditarJaula(){
    this.router.navigate(["editarjaula"]);
  }

}
