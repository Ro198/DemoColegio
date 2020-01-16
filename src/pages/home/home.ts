import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {
  MenuPage,
  InicioPage
  // BoxPage
} from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  login: { username?: string; password?: string } = {};

  submitted = false;

  constructor(public navCtrl: NavController) {

  }

  loginUser(form) {

     this.navCtrl.push(MenuPage);

  }

  regresar(){
    
    this.navCtrl.setRoot(InicioPage);
  }

  registrar(){
    
  }




}
