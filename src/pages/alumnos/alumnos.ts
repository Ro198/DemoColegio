import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  AlumnodetallePage
} from "../index.paginas";

@Component({
  selector: 'page-alumnos',
  templateUrl: 'alumnos.html',
})
export class AlumnosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  alumnoDetalles(){
    this.navCtrl.push(AlumnodetallePage);
  }

agregar(){

}

getItems($event){

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnosPage');
  }

}
