webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inicio_inicio__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__inicio_inicio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginusuario_loginusuario__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__loginusuario_loginusuario__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menuusuario_menuusuario__ = __webpack_require__(272);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__menuusuario_menuusuario__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grupos_grupos__ = __webpack_require__(273);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__grupos_grupos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alumnos_alumnos__ = __webpack_require__(274);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__alumnos_alumnos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alumnodetalle_alumnodetalle__ = __webpack_require__(275);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__alumnodetalle_alumnodetalle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trabajos_trabajos__ = __webpack_require__(276);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__trabajos_trabajos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__participaciones_participaciones__ = __webpack_require__(277);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__participaciones_participaciones__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tareas_tareas__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__tareas_tareas__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__proyecto_proyecto__ = __webpack_require__(279);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__proyecto_proyecto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Useralumnodetalle_Useralumnodetalle__ = __webpack_require__(280);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__Useralumnodetalle_Useralumnodetalle__["a"]; });












//# sourceMappingURL=index.paginas.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.loginMaestro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    InicioPage.prototype.loginUsuario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index_paginas__["e" /* LoginusuarioPage */]);
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\inicio\inicio.html"*/'\n\n<ion-content padding="true" style="background: url(img/fondo.png) no-repeat center;">\n\n\n\n    <img src="img/zulasoft.png" style="width:75%;">\n\n\n<div padding></div>\n<div padding></div>\n\n<div style="text-align: -webkit-center;">\n    <!--Boton Profesor-->\n    <div class="continuar">\n      <button ion-button round block color="zula1" style="height: 50px; width: 75%" type="submit" (click)="loginMaestro()">\n        Entrar como profesor\n        <ion-icon name="log-in" subtle large item-left></ion-icon>\n      </button>\n    </div>\n</div>\n\n<div style="text-align: -webkit-center;">\n     <!--Boton Usuario-->\n     <div class="continuar">\n      <button ion-button round block color="zula2" style="height: 50px; width: 75%" type="submit" (click)="loginUsuario()">\n        Entrar como usuario\n        <ion-icon name="log-in" subtle large item-left></ion-icon>\n      </button>\n    </div>\n  </div>\n\n    <div padding></div>\n\n  <h2 style="text-align: center; font-size: 12px;">¡AVISO!</h2>\n  <p style="text-align: center; font-size: 12px;">Versión de prueba</p>\n  <p style="text-align: center; font-size: 12px;">Demostración de una aplicación para colegios</p>\n  <br>\n  <p style="text-align: center; font-size: 12px;"><B>ZulaSoft</B> | Inicio | software solutions</p>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.login = {};
        this.submitted = false;
    }
    HomePage.prototype.loginUser = function (form) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["f" /* MenuPage */]);
    };
    HomePage.prototype.regresar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* InicioPage */]);
    };
    HomePage.prototype.registrar = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\home\home.html"*/'\n<ion-content padding="true" style="background: url(img/fondo.png) no-repeat center;">\n\n  <form #loginForm="ngForm">\n\n    <img src="img/profesor.png" style="width : 70% ; height : 50%">\n\n    <br>\n\n    <ion-item clearInput class="item-md">\n      <ion-icon name="person" subtle large item-left color="zula2"></ion-icon>\n      <ion-label floating style="color: #7DBCD5;">Profesor</ion-label>\n      <ion-input required spellcheck="false" type="text" [(ngModel)]="login.username" name="username"\n        #username="ngModel" spellcheck="false" required\n        oninvalid="setCustomValidity(\'Por favor ingresa tu nombre de usuario\')"\n        onchange="try{setCustomValidity(\'\')}catch(e){}" title="Por favor ingresa tu nombre de usuario" type="usuario"\n        maxlength="60"></ion-input>\n    </ion-item>\n\n    <p [hidden]="username.valid  || submitted==false " color="danger" padding-left>\n \n    </p>\n\n\n    <ion-item clearInput class="item-md">\n      <ion-icon name="key" subtle large item-left color="zula2"></ion-icon>\n      <ion-label floating style="color: #7DBCD5;">Contraseña</ion-label>\n      <ion-input required spellcheck="false" type="password" [(ngModel)]="login.password" name="password"\n        #password="ngModel" spellcheck="false" oninvalid="setCustomValidity(\'Por favor ingresa tu contraseña\')"\n        onchange="try{setCustomValidity(\'\')}catch(e){}"></ion-input>\n    </ion-item>\n\n    <p [hidden]="password.valid  || submitted==false " color="danger" padding-left>\n\n    </p>\n\n\n    <div padding></div>\n\n    <!--Boton Login-->\n    <div class="continuar">\n      <button ion-button round block color="zula1" style="height: 40px" type="submit" (click)="loginUser(loginForm)">\n        <ion-icon name="log-in" subtle large item-left></ion-icon>\n        Iniciar Sesión\n      </button> \n    </div>\n\n  </form>\n  \n\n \n<ion-grid>\n  <ion-row>\n\n      <ion-col><p style="text-align: center;">¡No eres profesor!</p></ion-col>\n      <ion-col><p style="text-align: center;">¡No tienes una cuenta!</p></ion-col>\n\n  </ion-row>\n\n  <ion-row>\n      <ion-col>\n    <!--Boton Regresar-->\n\n    <div style="text-align: center;">\n      <button ion-button round color="secondary" (click)="regresar()">\n          <ion-icon name="arrow-round-back" subtle large item-left></ion-icon>\n        Regresar\n      </button>\n    </div>\n  </ion-col>\n\n    <!--Boton Regristrar-->\n    <ion-col>\n      <div style="text-align: center;">\n        <button ion-button round color="zula2" (click)="registrar()">\n            Registrate\n            <ion-icon name="arrow-round-forward" subtle large item-left></ion-icon>\n        </button>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n \n  <br>\n\n\n  <p style="text-align: center; font-size: 12px;">Versión de prueba</p>\n  <p style="text-align: center; font-size: 12px;">Demostración de una aplicación para colegios</p>\n  <p style="text-align: center; font-size: 12px;"><B>ZulaSoft</B> | Inicio de sesión | software solutions</p>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["f" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["d" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["e" /* LoginusuarioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["g" /* MenuusuarioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["c" /* GruposPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["b" /* AlumnosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["a" /* AlumnodetallePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["k" /* TrabajosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["h" /* ParticipacionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["j" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["i" /* ProyectoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["l" /* UseralumnodetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["f" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["d" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["e" /* LoginusuarioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["g" /* MenuusuarioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["c" /* GruposPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["b" /* AlumnosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["a" /* AlumnodetallePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["k" /* TrabajosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["h" /* ParticipacionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["j" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["i" /* ProyectoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["l" /* UseralumnodetallePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.agregar = function () {
    };
    MenuPage.prototype.computacion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["c" /* GruposPage */]);
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\menu\menu.html"*/'\n\n<ion-content padding="true" style="background: url(img/menu.png) no-repeat center;">\n\n<p style="text-align: center;" >Bienvenid@:</p>\n<p style="text-align: center;" >Ing. Miguel Angel Vasquez Jimenes</p>\n<br>\n\n  <ion-list (click)="computacion()">\n    <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n      <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n\n        <h2 style="color: black;">\n           Clase de computación\n        </h2>\n        <p style="color: white;"> Escuela: Colegio Siglo XXI</p>\n        <button ion-button clear item-end color="zula1">\n          <ion-icon name="arrow-round-forward"></ion-icon>\n        </button>\n\n      </ion-item>\n    </ion-item-sliding>\n<br>\n    <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n        <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n  \n          <h2 style="color: black;">\n             Clase de Matematicas\n          </h2>\n          <p style="color: white;"> Escuela: Colegio siglo XXI</p>\n          <button ion-button clear item-end color="zula1">\n            <ion-icon name="arrow-round-forward"></ion-icon>\n          </button>\n  \n        </ion-item>\n      </ion-item-sliding>\n      <br>\n    <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n        <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n  \n          <h2 style="color: black;">\n             Clase de Español\n          </h2>\n          <p style="color: white;"> Escuela: Colegio siglo XXI</p>\n          <button ion-button clear item-end color="zula1">\n            <ion-icon name="arrow-round-forward"></ion-icon>\n          </button>\n  \n        </ion-item>\n      </ion-item-sliding>\n      <br>\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n    \n            <h2 style="color: black;">\n               Clase de Programación\n            </h2>\n            <p style="color: white;"> Escuela: Tecnologico de la Piedad</p>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n    \n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n            <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n      \n              <h2 style="color: black;">\n                 Clase de Fisica\n              </h2>\n              <p style="color: white;"> Escuela: CBTis 84</p>\n              <button ion-button clear item-end color="zula1">\n                <ion-icon name="arrow-round-forward"></ion-icon>\n              </button>\n      \n            </ion-item>\n          </ion-item-sliding>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-navbar color="zula2">\n      <ion-title>Mis clases</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="agregar()">\n          <ion-icon name="add" style="color: white;"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-footer>'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginusuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginusuarioPage = /** @class */ (function () {
    function LoginusuarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = {};
        this.submitted = false;
    }
    LoginusuarioPage.prototype.loginUser = function (form) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["g" /* MenuusuarioPage */]);
    };
    LoginusuarioPage.prototype.registrar = function () {
        //this.navCtrl.push( -- );
    };
    LoginusuarioPage.prototype.regresar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* InicioPage */]);
    };
    LoginusuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginusuarioPage');
    };
    LoginusuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginusuario',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\loginusuario\loginusuario.html"*/'\n<ion-content padding="true" style="background: url(img/fondo.png) no-repeat center;">\n\n    <form #loginForm="ngForm">\n\n        <img src="img/usuarios.png" style="width : 60% ; height : 50%">\n    \n    <br>\n    \n        <ion-item clearInput class="item-md">\n          <ion-icon name="person" subtle large item-left color="zula2"></ion-icon>\n          <ion-label floating style="color: #7DBCD5;">Usuario</ion-label>\n          <ion-input required spellcheck="false" type="text" [(ngModel)]="login.username" name="username"\n            #username="ngModel" spellcheck="false" required\n            oninvalid="setCustomValidity(\'Por favor ingresa tu nombre de usuario\')"\n            onchange="try{setCustomValidity(\'\')}catch(e){}" title="Por favor ingresa tu nombre de usuario" type="usuario"\n            maxlength="60"></ion-input>\n        </ion-item>\n    \n        <p [hidden]="username.valid  || submitted==false " color="danger" padding-left>\n    \n        </p>\n    \n    \n        <ion-item clearInput class="item-md">\n          <ion-icon name="key" subtle large item-left color="zula2"></ion-icon>\n          <ion-label floating style="color: #7DBCD5;">Contraseña</ion-label>\n          <ion-input required spellcheck="false" type="password" [(ngModel)]="login.password" name="password"\n            #password="ngModel" spellcheck="false" oninvalid="setCustomValidity(\'Por favor ingresa tu contraseña\')"\n            onchange="try{setCustomValidity(\'\')}catch(e){}"></ion-input>\n        </ion-item>\n    \n        <p [hidden]="password.valid  || submitted==false " color="danger" padding-left>\n    \n        </p>\n    \n    \n        <div padding></div>\n    \n        <!--Boton Login-->\n        <div class="continuar">\n          <button ion-button round block color="zula1" style="height: 40px" type="submit" (click)="loginUser(loginForm)">\n            <ion-icon name="log-in" subtle large item-left></ion-icon>\n            Iniciar Sesión\n          </button>\n        </div>\n    \n      </form>\n    \n<!--***********************************************************************************************************-->\n\n\n<ion-grid>\n    <ion-row>\n\n        <ion-col><p style="text-align: center;">¡No eres un usuario!</p></ion-col>\n        <ion-col><p style="text-align: center;">¡No tienes una cuenta!</p></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n      <!--Boton Regresar-->\n\n      <div style="text-align: center;">\n        <button ion-button round color="secondary" (click)="regresar()">\n            <ion-icon name="arrow-round-back" subtle large item-left></ion-icon>\n          Regresar\n        </button>\n      </div>\n    </ion-col>\n\n      <!--Boton Regristrar-->\n      <ion-col>\n        <div style="text-align: center;">\n          <button ion-button round color="zula2" (click)="registrar()">\n              Registrate\n              <ion-icon name="arrow-round-forward" subtle large item-left></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n      <br>\n    \n    \n      <p style="text-align: center; font-size: 12px;">Versión de prueba</p>\n      <p style="text-align: center; font-size: 12px;">Demostración de una aplicación para colegios</p>\n      <p style="text-align: center; font-size: 12px;"><B>ZulaSoft</B> | Inicio de sesión | software solutions</p>\n\n      \n</ion-content>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\loginusuario\loginusuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LoginusuarioPage);
    return LoginusuarioPage;
}());

//# sourceMappingURL=loginusuario.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuusuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuusuarioPage = /** @class */ (function () {
    function MenuusuarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuusuarioPage.prototype.getItems = function ($event) {
    };
    MenuusuarioPage.prototype.alumnoDetalles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["l" /* UseralumnodetallePage */]);
    };
    MenuusuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuusuarioPage');
    };
    MenuusuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuusuario',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\menuusuario\menuusuario.html"*/'\n  \n  <ion-content padding="true" style="background: url(img/menu.png) no-repeat center;">\n  \n    <ion-searchbar cancelButtonText (ionInput)="getItems($event)" \n    placeholder="Buscar alumno" \n    style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n</ion-searchbar>\n  \n<br>\n<!--****************************************************************************************-->\n\n<ion-list>\n    <ion-item-sliding  (click)="alumnoDetalles()" style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n      <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n\n        <h2 style="color: black;">\n           Salvador Rodrigo Ortiz Avila\n        </h2>\n        <p style="color: white;"> Grupo: A • Turno: matutino</p>\n        <button ion-button clear item-end color="zula1">\n          <ion-icon name="arrow-round-forward"></ion-icon>\n        </button>\n\n      </ion-item>\n    </ion-item-sliding>\n<br>\n    <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n        <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n  \n          <h2 style="color: black;">\n             Miguel Angel Vasquez Jimenes\n          </h2>\n          <p style="color: white;"> Grupo: B • Turno: vespertino</p>\n          <button ion-button clear item-end color="zula1">\n            <ion-icon name="arrow-round-forward"></ion-icon>\n          </button>\n  \n        </ion-item>\n      </ion-item-sliding>\n  </ion-list>\n  \n  </ion-content>\n\n  <ion-footer>\n      <ion-navbar color="zula2">\n        <ion-title>buscar</ion-title>\n      </ion-navbar>\n    </ion-footer>'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\menuusuario\menuusuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], MenuusuarioPage);
    return MenuusuarioPage;
}());

//# sourceMappingURL=menuusuario.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GruposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GruposPage = /** @class */ (function () {
    function GruposPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GruposPage.prototype.agregar = function () {
    };
    GruposPage.prototype.grupo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["b" /* AlumnosPage */]);
    };
    GruposPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GruposPage');
    };
    GruposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grupos',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\grupos\grupos.html"*/'\n\n<ion-content padding="true" style="background: url(img/menu.png) no-repeat center;">\n\n  <h5 style="text-align: center;" >Colegio Siglo XXI</h5>\n  <br>\n  \n    <ion-list (click)="grupo()">\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n    \n            <h2 style="color: black;">\n               Grupo A\n            </h2>\n            <p style="color: white;"> Turno: matutino • ciclo escolar: 2019</p>\n            <p style="color: white;"> Horario: 10:00 a 11:00</p>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n    \n          </ion-item>\n        </ion-item-sliding>\n        <br>\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n    \n            <h2 style="color: black;">\n              Grupo B\n            </h2>\n            <p style="color: white;"> Turno: matutino • ciclo escolar: 2019</p>\n            <p style="color: white;"> Horario: 11:00 a 12:00</p>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n    \n          </ion-item>\n        </ion-item-sliding>\n \n    </ion-list>\n  \n<!--\n    <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n      <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n        <h2 style="color: white;">\n           Notas:\n         </h2>\n          <p style="color: black;"> Para el Grupo A se le aplicara mañana examen\n           y para mañana se entregan trabajos para el Grupo B\n          </p>\n      </ion-item>\n    </ion-item-sliding>\n-->\n  \n  </ion-content>\n  \n  <ion-footer>\n      <ion-navbar color="zula2">\n        <ion-title>Mis grupos</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only (click)="agregar()">\n            <ion-icon name="add" style="color: white;"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-footer>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\grupos\grupos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], GruposPage);
    return GruposPage;
}());

//# sourceMappingURL=grupos.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlumnosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlumnosPage = /** @class */ (function () {
    function AlumnosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlumnosPage.prototype.alumnoDetalles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["a" /* AlumnodetallePage */]);
    };
    AlumnosPage.prototype.agregar = function () {
    };
    AlumnosPage.prototype.getItems = function ($event) {
    };
    AlumnosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlumnosPage');
    };
    AlumnosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alumnos',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\alumnos\alumnos.html"*/'<ion-content padding="true" style="background: url(img/menu.png) no-repeat center;">\n\n  <h5 style="text-align: center;" >Grupo A • Matutino</h5>\n  <p style="text-align: center;" >Periodo: Agosto - Diciembre</p>\n\n\n  <ion-searchbar cancelButtonText (ionInput)="getItems($event)" \n  placeholder="Buscar alumnos" \n  style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n</ion-searchbar>\n\n<br>\n  \n    <ion-list (click)="alumnoDetalles()">\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n            <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n              <h2 style="color: black;">\n                 Barragan Luna Paola Yuliana\n              </h2>\n              <button ion-button clear item-end color="zula1">\n                <ion-icon name="arrow-round-forward"></ion-icon>\n              </button>\n            </ion-item>\n          </ion-item-sliding>\n          <br>\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n               Ortiz Avila Salvador Rodrigo\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n              Vasques Jimenes Miguel Angel\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n               Calderon Fernandez Angel Dario\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n               Cazares Martinez Areli Yunuen\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n               Garcia Cazares Sara\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n               Hernandez Galvan Andrea Gpe.\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n               Mejia Perez Humberto\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n               Martinez Escobar Clara Elizabet\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n        <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n          <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <h2 style="color: black;">\n              Heredia Belmonte Leonardo\n            </h2>\n            <button ion-button clear item-end color="zula1">\n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n          </ion-item>\n        </ion-item-sliding>\n        <br>\n \n    </ion-list>\n\n  \n  </ion-content>\n  \n  <ion-footer>\n      <ion-navbar color="zula2">\n        <ion-title>Alumnos</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only (click)="agregar()">\n            <ion-icon name="add" style="color: white;"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-footer>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\alumnos\alumnos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], AlumnosPage);
    return AlumnosPage;
}());

//# sourceMappingURL=alumnos.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlumnodetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlumnodetallePage = /** @class */ (function () {
    function AlumnodetallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlumnodetallePage.prototype.trabajos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["k" /* TrabajosPage */]);
    };
    AlumnodetallePage.prototype.participaciones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["h" /* ParticipacionesPage */]);
    };
    AlumnodetallePage.prototype.tareas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["j" /* TareasPage */]);
    };
    AlumnodetallePage.prototype.proyecto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["i" /* ProyectoPage */]);
    };
    AlumnodetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlumnodetallePage');
    };
    AlumnodetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alumnodetalle',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\alumnodetalle\alumnodetalle.html"*/'<ion-content style="background: url(img/menu.png) no-repeat center;">\n   <img src="img/perfilM2.png" />\n \n   <ion-grid>\n      <ion-row>\n         <ion-col>\n            <h1 style="text-align: center; margin-top: -270px;">\n               <ion-icon name="contact" color="zula2"></ion-icon>\n               Paula Maria Luna Barragan\n            </h1>\n            <p style="color: black;; text-align: center;">Genero: Femenino</p>\n            <p style="color: black;; text-align: center;">Comportamiento: Bueno</p>\n         </ion-col>\n         <ion-col>\n            <h5 style="color: black; margin-top: -250px; text-align: center;">\n               <strong style="color: black;">Calificación Final</strong>\n            </h5>\n            <h3 style="color: black; margin-top: 0px; text-align: center;">\n               <strong style="color: #009CAD;">7.9</strong>\n            </h3>\n         </ion-col>\n      </ion-row>\n   </ion-grid>\n\n   <!--************************************************************************************************-->\n\n   <ion-list padding style="margin-top: -115px;" (click)="trabajos()">\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n         <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <ion-row style="text-align: center;">\n               <ion-col>\n                     <img src="img/trabajos.png"/>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">TRABAJOS EN CLASE</p>\n                  <p style="color: white; font-size: 3.0rem;">12</p>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">Puntaje</p>\n                  <p style="color: white; font-size: 2.5rem;">2.5</p>\n               </ion-col>\n            </ion-row>\n         </ion-item>\n      </ion-item-sliding>\n   </ion-list>\n\n   <ion-list padding style="margin-top: -30px;" (click)="participaciones()">\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n         <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <ion-row style="text-align: center;">\n               <ion-col>\n                     <img src="img/participaciones.png"/>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">PARTICIPACIONES</p>\n                  <p style="color: white; font-size: 3.0rem;">12</p>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">Puntaje</p>\n                  <p style="color: white; font-size: 2.5rem;">2.5</p>\n               </ion-col>\n            </ion-row>\n         </ion-item>\n      </ion-item-sliding>\n   </ion-list>\n\n   <ion-list padding style="margin-top: -30px;" (click)="tareas()">\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n         <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <ion-row style="text-align: center;">\n               <ion-col>\n                     <img src="img/tareas.png"/>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">TAREAS</p>\n                  <p style="color: white; font-size: 3.0rem;">10</p>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">Puntaje</p>\n                  <p style="color: white; font-size: 2.5rem;">2.0</p>\n               </ion-col>\n            </ion-row> \n         </ion-item> \n      </ion-item-sliding>\n   </ion-list>\n\n   <ion-list padding style="margin-top: -30px;" (click)="proyecto()">\n      <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n         <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n            <ion-row style="text-align: center;">\n               <ion-col>\n                     <img src="img/proyecto.png"/>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">PROYECTO</p>\n                  <p style="color: white; font-size: 3.0rem;">1</p>\n               </ion-col>\n               <ion-col>\n                  <p style="color: white;">Puntaje</p>\n                  <p style="color: white; font-size: 2.5rem;">2.9</p>\n               </ion-col>\n            </ion-row>\n         </ion-item>\n      </ion-item-sliding>\n   </ion-list>\n\n</ion-content>\n\n<ion-footer>\n   <ion-navbar color="zula2">\n      <ion-title>Detalles</ion-title>\n   </ion-navbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\alumnodetalle\alumnodetalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], AlumnodetallePage);
    return AlumnodetallePage;
}());

//# sourceMappingURL=alumnodetalle.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrabajosPage = /** @class */ (function () {
    function TrabajosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrabajosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabajosPage');
    };
    TrabajosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabajos',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\trabajos\trabajos.html"*/'<ion-content style="background: url(img/menu.png) no-repeat center;">\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-navbar color="zula2">\n       <ion-title>Trabajos</ion-title>\n    </ion-navbar>\n </ion-footer>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\trabajos\trabajos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], TrabajosPage);
    return TrabajosPage;
}());

//# sourceMappingURL=trabajos.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParticipacionesPage = /** @class */ (function () {
    function ParticipacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParticipacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParticipacionesPage');
    };
    ParticipacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-participaciones',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\participaciones\participaciones.html"*/'<ion-content style="background: url(img/menu.png) no-repeat center;">\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-navbar color="zula2">\n       <ion-title>Participaciones</ion-title>\n    </ion-navbar>\n </ion-footer>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\participaciones\participaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ParticipacionesPage);
    return ParticipacionesPage;
}());

//# sourceMappingURL=participaciones.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TareasPage = /** @class */ (function () {
    function TareasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TareasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TareasPage');
    };
    TareasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tareas',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\tareas\tareas.html"*/'<ion-content style="background: url(img/menu.png) no-repeat center;">\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-navbar color="zula2">\n       <ion-title>Tareas</ion-title>\n    </ion-navbar>\n </ion-footer>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\tareas\tareas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], TareasPage);
    return TareasPage;
}());

//# sourceMappingURL=tareas.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProyectoPage = /** @class */ (function () {
    function ProyectoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProyectoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProyectoPage');
    };
    ProyectoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proyecto',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\proyecto\proyecto.html"*/'<ion-content style="background: url(img/menu.png) no-repeat center;">\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-navbar color="zula2">\n       <ion-title>Proyecto</ion-title>\n    </ion-navbar>\n </ion-footer>\n'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\proyecto\proyecto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ProyectoPage);
    return ProyectoPage;
}());

//# sourceMappingURL=proyecto.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseralumnodetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UseralumnodetallePage = /** @class */ (function () {
    function UseralumnodetallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UseralumnodetallePage.prototype.trabajos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["k" /* TrabajosPage */]);
    };
    UseralumnodetallePage.prototype.participaciones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["h" /* ParticipacionesPage */]);
    };
    UseralumnodetallePage.prototype.tareas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["j" /* TareasPage */]);
    };
    UseralumnodetallePage.prototype.proyecto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["i" /* ProyectoPage */]);
    };
    UseralumnodetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UseralumnodetallePage');
    };
    UseralumnodetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-useralumnodetalle',template:/*ion-inline-start:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\Useralumnodetalle\useralumnodetalle.html"*/'<ion-content style="background: url(img/menu.png) no-repeat center;">\n  <img src="img/perfilM2.png" />\n\n  <ion-grid>\n     <ion-row>\n        <ion-col>\n           <h1 style="text-align: center; margin-top: -270px;">\n              <ion-icon name="contact" color="zula2"></ion-icon>\n              Salvador Rodrigo ortiz Avila\n           </h1>\n           <p style="color: black;; text-align: center;">Genero: Masculino</p>\n           <p style="color: black;; text-align: center;">Comportamiento: Bueno</p>\n        </ion-col>\n        <ion-col>\n           <h5 style="color: black; margin-top: -250px; text-align: center;">\n              <strong style="color: black;">Calificación Final</strong>\n           </h5>\n           <h3 style="color: black; margin-top: 0px; text-align: center;">\n              <strong style="color: #009CAD;">8.9</strong>\n           </h3>\n        </ion-col>\n     </ion-row>\n  </ion-grid>\n\n  <!--************************************************************************************************-->\n\n  <ion-list padding style="margin-top: -115px;" (click)="trabajos()">\n     <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n        <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n           <ion-row style="text-align: center;">\n              <ion-col>\n                    <img src="img/trabajos.png"/>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">TRABAJOS EN CLASE</p>\n                 <p style="color: white; font-size: 3.0rem;">12</p>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">Puntaje</p>\n                 <p style="color: white; font-size: 2.5rem;">2.5</p>\n              </ion-col>\n           </ion-row>\n        </ion-item>\n     </ion-item-sliding>\n  </ion-list>\n\n  <ion-list padding style="margin-top: -30px;" (click)="participaciones()">\n     <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n        <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n           <ion-row style="text-align: center;">\n              <ion-col>\n                    <img src="img/participaciones.png"/>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">PARTICIPACIONES</p>\n                 <p style="color: white; font-size: 3.0rem;">12</p>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">Puntaje</p>\n                 <p style="color: white; font-size: 2.5rem;">2.5</p>\n              </ion-col>\n           </ion-row>\n        </ion-item>\n     </ion-item-sliding>\n  </ion-list>\n\n  <ion-list padding style="margin-top: -30px;" (click)="tareas()">\n     <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n        <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n           <ion-row style="text-align: center;">\n              <ion-col>\n                    <img src="img/tareas.png"/>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">TAREAS</p>\n                 <p style="color: white; font-size: 3.0rem;">10</p>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">Puntaje</p>\n                 <p style="color: white; font-size: 2.5rem;">2.0</p>\n              </ion-col>\n           </ion-row> \n        </ion-item> \n     </ion-item-sliding>\n  </ion-list>\n\n  <ion-list padding style="margin-top: -30px;" (click)="proyecto()">\n     <ion-item-sliding style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px; border: #00A7C9 1px solid;">\n        <ion-item style="background-color: rgba(0, 0, 0, 0.1); border-radius: 30px;">\n           <ion-row style="text-align: center;">\n              <ion-col>\n                    <img src="img/proyecto.png"/>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">PROYECTO</p>\n                 <p style="color: white; font-size: 3.0rem;">1</p>\n              </ion-col>\n              <ion-col>\n                 <p style="color: white;">Puntaje</p>\n                 <p style="color: white; font-size: 2.5rem;">2.9</p>\n              </ion-col>\n           </ion-row>\n        </ion-item>\n     </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-navbar color="zula2">\n     <ion-title>Detalles</ion-title>\n  </ion-navbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\cibanco1\Documents\PROYECTOS\ionic\10-democolegio\src\pages\Useralumnodetalle\useralumnodetalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], UseralumnodetallePage);
    return UseralumnodetallePage;
}());

//# sourceMappingURL=Useralumnodetalle.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map