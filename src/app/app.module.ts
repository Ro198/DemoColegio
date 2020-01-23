import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {
  MenuPage,
  InicioPage,
  LoginusuarioPage, 
  MenuusuarioPage,
  GruposPage,
  AlumnosPage,
  AlumnodetallePage,
  TrabajosPage,
  ParticipacionesPage,
  TareasPage,
  ProyectoPage,
  UseralumnodetallePage,
 } from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    InicioPage,
    LoginusuarioPage,
    MenuusuarioPage,
    GruposPage,
    AlumnosPage,
    AlumnodetallePage,
    TrabajosPage,
    ParticipacionesPage,
    TareasPage,
    ProyectoPage,
    UseralumnodetallePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    InicioPage,
    LoginusuarioPage,
    MenuusuarioPage,
    GruposPage,
    AlumnosPage,
    AlumnodetallePage,
    TrabajosPage,
    ParticipacionesPage,
    TareasPage,
    ProyectoPage,
    UseralumnodetallePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
