import { SvcEnfermedadesService } from './../../services/svc-enfermedades.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-enfermedades',
  templateUrl: './list-enfermedades.component.html',
  styleUrls: ['./list-enfermedades.component.css']
})
export class ListEnfermedadesComponent implements OnInit {
  isLoading: boolean = true
  enfermedades = {}
  activabusqueda: boolean = false
  respuesta: any
  lista: any
  id!: number
  filtra =''
  campo = 'enfermedad'
  campos = [
    'codigo',
    'enfermedad'
  ]


  constructor(private router: Router,
    private service: SvcEnfermedadesService

  ) {


  }
  ngOnInit(): void {
    this.listar_enfermedades()
    this.isLoading = false
  }


  buscarEnGoogle(palabraClave: string) {

    const url = `https://www.google.com/search?q=${encodeURIComponent(palabraClave)}`;
    window.open(url, '_blank');
  }
  salir() {
    this.router.navigate(['/home'])

  }
  eliminar(id: number, i: number) {
    this.id = id
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Querer Eliminar este registro ?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar_enfermedades(id).subscribe(resp => {
          this.respuesta = JSON.parse(resp)

          this.lista.splice(i, 1);
          this.respuesta = JSON.parse(resp);
          if (this.respuesta.status) {
            Swal.fire({ icon: 'success', title: this.respuesta.mensaje, showConfirmButton: false, timer: 1000 })
          } else {
            Swal.fire({ icon: 'info', title: this.respuesta.mensaje, showConfirmButton: false, timer: 1000 })
          }
          this.listar_enfermedades()

          //   if (this.auditando){
          //     this.auditor.auditaRegistro(this.usuario.usuario,"Lista-Gym","Gym","Eliminar",this.id)
          //     Swal.fire({ icon: 'success', title: 'Hemos Eliminado el Registro', showConfirmButton: false, timer: 1500})
          //  }
        })
      }
    })
  }
  editar(id: string) {
    this.router.navigate(['/edita-enfermedades', id])
  }
  agregar(){
    this.router.navigate(['/agregar-emnfermedades'])
  }
  listar_enfermedades() {
    this.service.lista_enfermedades().subscribe(resp => {
      this.respuesta = JSON.parse(resp)
      if (this.respuesta.status) {
        this.lista = this.respuesta.data
      } else {
        Swal.fire('Listado ', this.respuesta.mensaje, 'success')

      }
    })
  }


}
