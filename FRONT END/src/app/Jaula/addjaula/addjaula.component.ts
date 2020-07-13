import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjaula',
  templateUrl: './addjaula.component.html',
  styleUrls: ['./addjaula.component.css']
})
export class AddjaulaComponent implements OnInit {

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
}
