import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  UseralumnodetallePage
} from "../index.paginas";


@Component({
  selector: 'page-menuusuario',
  templateUrl: 'menuusuario.html',
})
export class MenuusuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getItems($event){

  }

  alumnoDetalles(){
    this.navCtrl.push(UseralumnodetallePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuusuarioPage');
  }

}
