import { SvcExamenesService } from './../../services/svc-examenes.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-examenes',
  templateUrl: './list-examenes.component.html',
  styleUrls: ['./list-examenes.component.css']
})
export class ListExamenesComponent {
  isLoading: boolean = true
  examenes = {}
  activabusqueda: boolean = false
  respuesta: any
  lista: any
  id!: number
  filtra =''
  campo = 'examen'
  campos = [
    'codigo',
    'examen'
  ]


  constructor(private router: Router,
    private service: SvcExamenesService

  ) {


  }
  ngOnInit(): void {
    this.listar_examenes()
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
        this.service.eliminar_examenes(id).subscribe(resp => {
          this.respuesta = JSON.parse(resp)

          this.lista.splice(i, 1);
          this.respuesta = JSON.parse(resp);
          if (this.respuesta.status) {
            Swal.fire({ icon: 'success', title: this.respuesta.mensaje, showConfirmButton: false, timer: 1000 })
          } else {
            Swal.fire({ icon: 'info', title: this.respuesta.mensaje, showConfirmButton: false, timer: 1000 })
          }
          this.listar_examenes()

          //   if (this.auditando){
          //     this.auditor.auditaRegistro(this.usuario.usuario,"Lista-Gym","Gym","Eliminar",this.id)
          //     Swal.fire({ icon: 'success', title: 'Hemos Eliminado el Registro', showConfirmButton: false, timer: 1500})
          //  }
        })
      }
    })
  }
agregar(){
  this.router.navigate(['/agregar-examenes'])
}

  editar(id: string) {
    this.router.navigate(['/edita-examenes', id])
  }
  listar_examenes() {
    this.service.lista_examenes().subscribe(resp => {
      this.respuesta = JSON.parse(resp)
      if (this.respuesta.status) {
        this.lista = this.respuesta.data
      } else {
        Swal.fire('Listado ', this.respuesta.mensaje, 'success')

      }
    })
  }
}
