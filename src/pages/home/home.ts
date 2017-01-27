import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import { Network } from 'ionic-native';

import { AtractivosTuristicos } from '../atractivos-turisticos/atractivos-turisticos';
import { ZonaSegura } from '../zona-segura/zona-segura';

declare var window;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAtractivosTuristicos(){

    this.navCtrl.push(AtractivosTuristicos);
  }

  goZonaSegura(){

    this.navCtrl.push(ZonaSegura);
  }

  doRefresh(refresher) {

      this.goMessage();
      refresher.complete();


  }

  ionViewWillEnter() {
    this.goMessage();
  }

  goMessage(){
    console.log("Evento mensaje ");
  }

 callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }
}
