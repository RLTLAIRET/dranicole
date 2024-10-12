import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  form: FormGroup;
  currentSection = 0; // Controla la sección actual
  valido: boolean=true

  constructor(private fb: FormBuilder) {
     this.createForm()
  }

  ngOnInit(): void {}


  createForm(){
    this.form = this.fb.group({
      nombre:      ['',[ Validators.required]],
      cedula:      ['',[ Validators.required]],
      num_sso:     ['',[ Validators.required]],
      direccion1:  ['',[ Validators.required]],
      direccion2:  ['',[ Validators.required]],
      estado:      ['',[ Validators.required]],
      correo:      ['',[ Validators.required]],
      telefono:    ['',[ Validators.required]],
      celular:     ['',[ Validators.required]],
      sexo:        ['',[ Validators.required]],
      fnacimiento: ['',[ Validators.required]],
      edad:        ['',[ Validators.required]],

    });
  }
  // validadores
  get nombreNoValido() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }
  get cedulaNoValido() {
    return this.form.get('cedula').invalid && this.form.get('cedula').touched
  }

  get ssoNoValido() {
    return this.form.get('num_sso').invalid && this.form.get('num_sso').touched
  }

  get Dir1NoValido() {
    return this.form.get('direccion1').invalid && this.form.get('direccion1').touched
  }
  get Dir2NoValido() {
    return this.form.get('direccion2').invalid && this.form.get('direccion2').touched
  }
  get estadoNoValido() {
    return this.form.get('estado').invalid && this.form.get('estado').touched
  }
  get correoNoValido() {
    return this.form.get('correo').invalid && this.form.get('correo').touched
  }
  get telefonoNoValido() {
    return this.form.get('telefono').invalid && this.form.get('telefono').touched
  }
  get celularNoValido() {
    return this.form.get('celular').invalid && this.form.get('celular').touched
  }
  get sexoNoValido() {
    return this.form.get('sexo').invalid && this.form.get('sexo').touched
  }
  get fnacimientoNoValido() {
    return this.form.get('fnacimiento').invalid && this.form.get('fnacimiento').touched
  }
 // Ir a la siguiente sección
 next() {
  if (this.valido) {
    this.currentSection++;
  } else {
    this.validateForm();
  }
}
  // Ir a la sección anterior
  prev() {
    this.currentSection-- ;
    console.log(this.currentSection);

  }

  calcularEdad(fechaNacimiento: string) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();

    // Si aún no ha cumplido años este año, restamos 1
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())
    ) {
      edad--;
    }
    this.form.controls['edad'].setValue(edad)
  }

  // Validar y mostrar errores
  validateForm() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  // Enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado', this.form.value);
    } else {
      this.validateForm();
    }
  }


}
