import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MainService } from '../../services/main.service';
import { ZonaSegura } from '../zona-segura/zona-segura';
import { ConnectivityService } from '../../services/connectivity.service';


/*
  Generated class for the AtractivosTuristicos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-atractivos-turisticos',
  templateUrl: 'atractivos-turisticos.html'
})
export class AtractivosTuristicos {

  public allAtractivos;
  public atractivoTipo : number=8;

  constructor(public navCtrl: NavController,private mainService: MainService,public connectivityService: ConnectivityService,private alertCtrl: AlertController){}

  statusNetwork(){

  let alert = this.alertCtrl.create({
   title: 'Sin Conexión !',
   subTitle: 'Compruebe el acceso a la red',
    buttons: [{
      text: 'Aceptar',
      handler: () => {

        let navTransition = alert.dismiss();

        return false;
      }
    }]
  });

  alert.present();

  }

  doRefresh(refresher) {

    if(this.connectivityService.isOnline()){
      console.log("statusNetwork ON");
      this.getAtractivos();
      console.log('Refresh', this.getAtractivos);
      refresher.complete();
    }
    else {
      console.log("statusNetwork OFF");
      this.statusNetwork();
      refresher.complete();
    }

  }

  ionViewWillEnter() {

    if(this.connectivityService.isOnline()){
      console.log("statusNetwork ON");
      this.getAtractivos();
    }
    else {
      console.log("statusNetwork OFF");
      this.statusNetwork();
    }

  }

  getAtractivos():void
  {
    console.log("Get Atractivos");
    this.mainService.getAtractivoTipo(this.atractivoTipo).then(
      resultado => {
        this.allAtractivos = resultado;
        console.log(resultado)}
      );

  }

}
