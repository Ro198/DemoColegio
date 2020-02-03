import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';



import {
      LoginusuarioPage
} from "../index.paginas";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {


  }




  loginMaestro() {

    this.navCtrl.push(HomePage);

 }

 loginUsuario() {

  this.navCtrl.push(LoginusuarioPage);

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
