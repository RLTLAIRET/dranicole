import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SvcExamenesService {
  // app_clinica
  url:string = environment.url+'/utiles/'


  constructor( private http:HttpClient
              ) {

  }

  agregar_examenes(form:FormGroup):Observable<any>{
    return this.http.post(`${this.url}svc_examenes.php`,form.value, {responseType: "text"});
  }
  actualizar_examenes(id:any, form:FormGroup):Observable<any>{
     return this.http.put(`${this.url}svc_examenes.php/?id=`+id,form.value, {responseType: "text"});
  }
  lista_examenes():Observable<any>{
    return this.http.get(`${this.url}svc_examenes.php`, {responseType: "text"});
  }
  eliminar_examenes(id:number):Observable<any>{
    return this.http.delete(`${this.url}svc_examenes.php/?id=`+id, {responseType: "text"});
  }
  busca_examen(id:any){
    return this.http.get(`${this.url}svc_examenes.php/?id=`+id, {responseType: "text"});
  }

}
