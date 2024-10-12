
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SvcEnfermedadesService {
  // app_clinica
  url:string = environment.url+'/utiles/'


  constructor( private http:HttpClient
              ) {

  }

  agregar_enfermedades(form:FormGroup):Observable<any>{
    return this.http.post(`${this.url}svc_enfermedades.php`,form.value, {responseType: "text"});
  }
  actualizar_enfermedades(id:any, form:FormGroup):Observable<any>{
     return this.http.put(`${this.url}svc_enfermedades.php/?id=`+id,form.value, {responseType: "text"});
  }
  lista_enfermedades():Observable<any>{
    return this.http.get(`${this.url}svc_enfermedades.php`, {responseType: "text"});
  }
  eliminar_enfermedades(id:number):Observable<any>{
    return this.http.delete(`${this.url}svc_enfermedades.php/?id=`+id, {responseType: "text"});
  }
  busca_enfermedad(id:any){
    return this.http.get(`${this.url}svc_enfermedades.php/?id=`+id, {responseType: "text"});
  }

}
