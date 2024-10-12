import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';
import { DashboradComponent } from './share/dashborad/dashborad.component';
import { Page404Component } from './share/page404/page404.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { CitasComponent } from './components/citas/citas.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ListEnfermedadesComponent } from './utiles/list-enfermedades/list-enfermedades.component';
import { FormsModule } from '@angular/forms';
import { EnfermedadPipe } from './pipes/enfermedad.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EditEnfermedadadesComponent } from './utiles/edit-enfermedadades/edit-enfermedadades.component';
import { CommonModule } from '@angular/common';
import { AddEnfermedadesComponent } from './utiles/add-enfermedades/add-enfermedades.component';
import { ListExamenesComponent } from './utiles/list-examenes/list-examenes.component';
import { EditExamenesComponent } from './utiles/edit-examenes/edit-examenes.component';
import { AddExamenesComponent } from './utiles/add-examenes/add-examenes.component';
import { ExamenesPipe } from './pipes/examenes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboradComponent,
    Page404Component,
    NavbarComponent,
    PacientesComponent,
    CitasComponent,
    TratamientosComponent,
    RecipesComponent,
    LoadingComponent,
    ListEnfermedadesComponent,
    EnfermedadPipe,
    EditEnfermedadadesComponent,
    AddEnfermedadesComponent,
    ListExamenesComponent,
    EditExamenesComponent,
    AddExamenesComponent,
    ExamenesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
