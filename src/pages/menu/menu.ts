import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
    GruposPage
} from "../index.paginas";


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  agregar(){

  }

  computacion(){
      this.navCtrl.push(GruposPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
