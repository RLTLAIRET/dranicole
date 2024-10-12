import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SvcEnfermedadesService } from 'src/app/services/svc-enfermedades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-enfermedades',
  templateUrl: './add-enfermedades.component.html',
  styleUrls: ['./add-enfermedades.component.css']
})
export class AddEnfermedadesComponent {
  form:FormGroup
  respuesta:any
  constructor(private fb: FormBuilder,
              private service: SvcEnfermedadesService,
              private router : Router
  ){
    this.createForm()
  }


createForm() {
  this.form = this.fb.group({
    codigo: ['', [Validators.required]],
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
    Swal.fire({ icon: 'info', title: 'Debe completar los datos del formulario', showConfirmButton: false, timer: 1000 })

  }

  this.service.agregar_enfermedades(this.form).subscribe(resp=>{
    this.respuesta=JSON.parse(resp);
    if (this.respuesta.status){
      Swal.fire({ icon: 'success', title: this.respuesta.mensaje, showConfirmButton: false, timer: 1000 })
    } else {
      Swal.fire({ icon: 'info', title: this.respuesta.mensaje, showConfirmButton: false, timer: 1000 })
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
