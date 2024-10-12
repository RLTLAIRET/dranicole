import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SvcEnfermedadesService } from 'src/app/services/svc-enfermedades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-enfermedadades',
  templateUrl: './edit-enfermedadades.component.html',
  styleUrls: ['./edit-enfermedadades.component.css']
})
export class EditEnfermedadadesComponent implements OnInit {
  // Definimos el formulario reactivo
  form!: FormGroup;
  submitted: boolean = false
  idx!: number
  respuesta: any

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: SvcEnfermedadesService,
    private activated: ActivatedRoute
  ) {
    this.createForm()
  }

  ngOnInit(): void {

    this.activated.params.subscribe(params => {
      this.idx = params['id']
      this.service.busca_enfermedad(this.idx).subscribe(resp => {
        this.respuesta = JSON.parse(resp)
        const { codigo, enfermedad } = this.respuesta.data[0]
        this.form.controls['codigo'].setValue(codigo)
        this.form.controls['enfermedad'].setValue(enfermedad)

      })

    })
  }

  createForm() {
    this.form = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3)]],
      enfermedad: ['', [Validators.required]]
    });
  }


  resetForm() {
    this.form = this.fb.group({
      codigo: '',
      enfermedad: '',
    });
  }

  // Método para manejar el envío del formulario

  onSubmit() {

    if (!this.form.valid) {
      Swal.fire({ icon: 'info', title: 'Debe completar los datos del formulario', showConfirmButton: false, timer: 2000 })

    }
    this.service.actualizar_enfermedades(this.idx,this.form).subscribe(resp=>{
      this.respuesta=JSON.parse(resp);
      if (this.respuesta.status){
        Swal.fire({ icon: 'success', title: this.respuesta.mensaje, showConfirmButton: false, timer: 1000 })
      } else {
        Swal.fire({ icon: 'info', title: this.respuesta.mensaje, showConfirmButton: false, timer: 3000 })
      }
      this.salir()
    })



  }


  get codigoNoValido() {
    return this.form.get('codigo').invalid && this.form.get('codigo').touched
  }
  get enfermedadNoValida() { return this.form.get('enfermedad').invalid && this.form.get('enfermedad').touched }


  salir() {
    this.router.navigate(['/lista-enfermedades'])
  }



}
