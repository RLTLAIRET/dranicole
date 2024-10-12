import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component {

  constructor(private router: Router){

  }

  regresar(){
    this.router.navigate(['/home'])
  }
}
