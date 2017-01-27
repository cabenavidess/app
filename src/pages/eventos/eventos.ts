import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
// import 'rxjs/add/operator/timeout';

import { MainService } from '../../services/main.service';
import { ZonaSegura } from '../zona-segura/zona-segura';
import { ConnectivityService } from '../../services/connectivity.service';
import { NativeStorage } from 'ionic-native';



/*
  Generated class for the Eventos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class Eventos {

  public allEventos;
  public addingZS = ZonaSegura;
  public datos: any;
  public online;
  public offline;
  public cargando: Boolean;
  public datatita: any;


  constructor(public navCtrl: NavController, private mainService: MainService, public connectivityService: ConnectivityService, private alertCtrl: AlertController) { }


  statusNetwork() {

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

    if (this.connectivityService.isOnline()) {
      console.log("statusNetwork ON");
      this.getEventos();
      console.log('Refresh', this.getEventos);
      refresher.complete();
      // localStorage.setItem('key','hola putos');
    }
    else {
      console.log("statusNetwork OFF");
      this.statusNetwork();
      refresher.complete();
      // var event = JSON.parse(localStorage.getItem('eventos'));
      // this.allEventos = event;
    }

    NativeStorage.getItem('myitem')
      .then(
      data => { this.datatita = data },
      error => console.error(error)
      );

    console.log('mi mensaje');
    console.log(this.datatita);
  }

  ionViewWillEnter() {

    if (this.connectivityService.isOnline()) {
      console.log("statusNetwork ON");
      this.getEventos();

      NativeStorage.setItem('myitem',  {property: 'value', anotherProperty: 'anotherValue'})
        .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
        );
    }
    else {
      console.log("statusNetwork OFF");
      this.statusNetwork();
    }

  }

  getEventos(): void {

    this.mainService.getEventos().then(
      resultado => {
        this.allEventos = resultado;
        console.log(resultado);




        // localStorage.setItem('eventos', JSON.stringify(this.allEventos));
        //  this.saveSession();
        //  console.log(this.saveSession());
      });



  }


}
