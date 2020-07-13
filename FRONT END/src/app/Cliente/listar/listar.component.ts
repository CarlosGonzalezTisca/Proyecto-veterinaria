import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {ClienteService} from '../../service/clienteservice/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  [x: string]: any;
  Clientex={
    _id: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    direccion: "",
    telefono: "",
    correo: "",
    mascota: [{
            
            nombre: "",
            raza: "",
            tamaño: "",
            peso: "",
            jaula:{
                numerojaula: "",
                activa: "",
                idmascota: "",
                hora:""
            }
        }
    ],
    cita: [
        {
            
            numerocita:"",
            fecha:"",
            hora: "",
            descripcion: "",
            servicio: [{
                nombreserv: "",
                costo: "",
                descuento: "",
                total:"",
            }]
        }],

    tipocliente: [{
            registrado: ""
        }]


};
  Clientes;

  Cliente={
    Nombre:"",
    Fecha_inicio:"",
    Fecha_termino: "",
    Nombre_ins:"",
    Correo_electronico_ins:"",
    Nombre_par:"",
    Correo_electronico_par:"",
    Fecha_nac_par:"",
    Empresa_par:"",
    Horas:"",
    Curso_requisito:"",
    Costo:"",

  }
  
  constructor(private router:Router,private clienteservice: ClienteService) { }
 
  ngOnInit(): void {
    this.consultartodo();
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
Editar(){
  this.router.navigate(["editar"]);
}

consultartodo(){
  this.Clientes=this.clienteservice.consutartodo();
}


}
