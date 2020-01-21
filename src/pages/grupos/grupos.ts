import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  AlumnosPage
} from "../index.paginas";


@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


agregar(){

}

grupo(){

  this.navCtrl.push(AlumnosPage);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposPage');
  }

}
