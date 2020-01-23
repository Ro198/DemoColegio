import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  TrabajosPage,
  ParticipacionesPage,
  TareasPage,
  ProyectoPage,
} from "../index.paginas";

@Component({
  selector: 'page-useralumnodetalle',
  templateUrl: 'useralumnodetalle.html',
})
export class UseralumnodetallePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

trabajos() {
  this.navCtrl.push(TrabajosPage);
 }
 participaciones() {
   this.navCtrl.push(ParticipacionesPage);
 }
 tareas() {
   this.navCtrl.push(TareasPage);
 }
 proyecto() {
   this.navCtrl.push(ProyectoPage);
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UseralumnodetallePage');
  }

}
