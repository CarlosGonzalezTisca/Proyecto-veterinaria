import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClienteService} from '../../service/clienteservice/cliente.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Listar(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["add"]);
  }
}
