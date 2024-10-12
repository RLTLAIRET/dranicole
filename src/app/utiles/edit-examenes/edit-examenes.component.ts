import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SvcExamenesService } from 'src/app/services/svc-examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-examenes',
  templateUrl: './edit-examenes.component.html',
  styleUrls: ['./edit-examenes.component.css']
})
export class EditExamenesComponent {
  idx:number
  respuesta:any
  form:FormGroup
  constructor(private fb: FormBuilder,
    private router: Router,
    private service: SvcExamenesService,
    private activated: ActivatedRoute
  ) {
    this.createForm()
  }

  ngOnInit(): void {

    this.activated.params.subscribe(params => {
      this.idx = params['id']
      this.service.busca_examen(this.idx).subscribe(resp => {
        this.respuesta = JSON.parse(resp)
        console.log(this.respuesta);

        const { codigo, examen } = this.respuesta.data[0]
        this.form.controls['codigo'].setValue(codigo)
        this.form.controls['examen'].setValue(examen)

      })

    })
  }

  createForm() {
    this.form = this.fb.group({
      codigo: [''],
      examen: ['', [Validators.required]]
    });
  }


  resetForm() {
    this.form = this.fb.group({
      codigo: '',
      examen: '',
    });
  }

  // Método para manejar el envío del formulario

  onSubmit() {

    if (!this.form.valid) {
      Swal.fire({ icon: 'info', title: 'Debe completar los datos del formulario', showConfirmButton: false, timer: 2000 })

    }
    this.service.actualizar_examenes(this.idx,this.form).subscribe(resp=>{
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
  get examenNoValida() { return this.form.get('examen').invalid && this.form.get('examen').touched }


  salir() {
    this.router.navigate(['/lista-examenes'])
  }

}
