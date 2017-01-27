import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, NativeStorage } from 'ionic-native';

import  db  from '../database';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


    // constructor(platform: Platform) {
    //   platform.ready().then(() => {
    //     // Okay, so the platform is ready and our plugins are available.
    //     // Here you can do any higher level native things you might need.
    //     StatusBar.styleDefault();
    //     //Verificar session y redireccionar a login en caso de que no
    //     //haya sesion y redirecciona a home encaso de que si.
    //     NativeStorage.getItem('session-data')
    //       .then(
    //         data => {console.log(data); this.redirectMain();},
    //         error => {console.error(error); this.redirectLogin();}
    //       );
    //   });
    // }
}
