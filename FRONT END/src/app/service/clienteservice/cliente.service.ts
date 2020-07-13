import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private Url="http://localhost:3000/cliente"
 
 

  constructor(private http:HttpClient) { }
    
  insertarcliente(cliente){
    return this.http.post<any>(this.Url,cliente)
  }
    
  modificarcliente(cliente){
    return this.http.put<any>(this.Url,cliente)
  
  
  }

  consutarcliente(cliente){ 
  
    return this.http.get<any>(this.Url+"/"+cliente.nombre)
  
  
  }
  consutartodo(){
    return this.http.get<any>(this.Url)
  
  
  }
  eliminarclinte(cliente){
    return this.http.delete<any>(this.Url+"/"+cliente.Nombre,cliente)
  
  
  }
}
