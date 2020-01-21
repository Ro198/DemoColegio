import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  MenuusuarioPage,
  InicioPage
  // BoxPage
} from "../index.paginas";


@Component({
  selector: 'page-loginusuario',
  templateUrl: 'loginusuario.html',
})
export class LoginusuarioPage {


  login: { username?: string; password?: string } = {};

  submitted = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginUser(form) {

    this.navCtrl.push(MenuusuarioPage);

 }

 registrar(){
   
  //this.navCtrl.push( -- );
}


 regresar(){
   
   this.navCtrl.setRoot(InicioPage);
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginusuarioPage');
  }

}
