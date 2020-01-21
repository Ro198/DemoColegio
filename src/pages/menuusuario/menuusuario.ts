import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-menuusuario',
  templateUrl: 'menuusuario.html',
})
export class MenuusuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getItems($event){

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuusuarioPage');
  }

}
