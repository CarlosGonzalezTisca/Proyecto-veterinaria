import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AddComponent } from './Cliente/add/add.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import { ListarempleadoComponent } from './Empleado/listarempleado/listarempleado.component';
import { AddempleadoComponent } from './Empleado/addempleado/addempleado.component';
import { EditarempleadoComponent } from './Empleado/editarempleado/editarempleado.component';
import { AddjaulaComponent } from './Jaula/addjaula/addjaula.component';
import { EditarjaulaComponent } from './Jaula/editarjaula/editarjaula.component';
import { ListarjaulaComponent } from './Jaula/listarjaula/listarjaula.component';
import { AddmascotaComponent } from './Mascota/addmascota/addmascota.component';
import { EditarmascotaComponent } from './Mascota/editarmascota/editarmascota.component';
import { ListarmascotaComponent } from './Mascota/listarmascota/listarmascota.component';
import { AddusuarioComponent } from './Usuario/addusuario/addusuario.component';
import { EditarusuarioComponent } from './Usuario/editarusuario/editarusuario.component';
import { ListarusuarioComponent } from './Usuario/listarusuario/listarusuario.component';
const routes: Routes = [
//Rutas de los componentes
{path:'listar',component:ListarComponent},
{path:'add',component:AddComponent},
{path:'editar',component:EditarComponent},
{path:'menu',component:MenuComponent},
{path:'footer',component:FooterComponent},
{path:'listarempleado',component:ListarempleadoComponent},
{path:'listarjaula',component:ListarjaulaComponent},
{path:'addempleado',component:AddempleadoComponent},
{path:'editarempleado',component:EditarempleadoComponent},
{path:'addjaula',component:AddjaulaComponent},
{path:'editarjaula',component:EditarjaulaComponent},
{path:'listarmascota',component:ListarmascotaComponent},
{path:'addmascota',component:AddmascotaComponent},
{path:'editarmascota',component:EditarmascotaComponent},
{path:'listarusuario',component:ListarusuarioComponent},
{path:'addusuario',component:AddusuarioComponent},
{path:'editarusuario',component:EditarusuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
