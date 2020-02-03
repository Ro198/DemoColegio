import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  TrabajosPage,
  ParticipacionesPage,
  TareasPage,
  ProyectoPage,
} from "../index.paginas";
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
 
@Component({
  selector: 'page-alumnodetalle',
  templateUrl: 'alumnodetalle.html',
})
export class AlumnodetallePage {

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
    console.log('ionViewDidLoad AlumnodetallePage');
  }

}
