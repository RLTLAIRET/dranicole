import { RecipesComponent } from './components/recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './share/dashborad/dashborad.component';
import { Page404Component } from './share/page404/page404.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { CitasComponent } from './components/citas/citas.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { ListEnfermedadesComponent } from './utiles/list-enfermedades/list-enfermedades.component';
import { EditEnfermedadadesComponent } from './utiles/edit-enfermedadades/edit-enfermedadades.component';
import { AddEnfermedadesComponent } from './utiles/add-enfermedades/add-enfermedades.component';
import { ListExamenesComponent } from './utiles/list-examenes/list-examenes.component';
import { EditExamenesComponent } from './utiles/edit-examenes/edit-examenes.component';
import { AddExamenesComponent } from './utiles/add-examenes/add-examenes.component';

const routes: Routes = [
  {path: 'home', component : DashboradComponent},
  // {path: 'Page404', component :Page404Component},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'tratamientos', component : TratamientosComponent},
  {path: 'recipes', component : RecipesComponent},
  {path: 'lista-examenes', component: ListExamenesComponent},
  {path: 'agregar-enfermedades', component: AddEnfermedadesComponent},
  {path: 'agregar-examenes', component: AddExamenesComponent},
  {path: 'lista-enfermedades', component: ListEnfermedadesComponent},
  {path: 'edita-enfermedades/:id', component: EditEnfermedadadesComponent},
  {path: 'edita-examenes/:id', component: EditExamenesComponent},

  {path: '**', redirectTo: 'home', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
