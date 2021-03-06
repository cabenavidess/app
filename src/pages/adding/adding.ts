import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Transaction } from '../../database';
import { GeolocationService } from '../../services/geolocation.service';

/*
  Generated class for the Adding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html'
})
export class Adding {

  model:  Transaction;
  shouldSend : boolean = true;
    shouldGeolocate: boolean = true;

  constructor(public navCtrl: NavController, public geolocator : GeolocationService) {}

  ionViewDidLoad() {
    this.model = new Transaction(null,"");
    console.log("Page Adding");
    // this.geolocator.get().then((resultado)=>{
    //   console.log(resultado.coords.latitude);
    //   console.log(resultado.coords.longitude);
    // });
  }

  getLocation(){
    if(this.shouldGeolocate){
      this.shouldSend = false;
      this.geolocator.get().then((resultado)=>{
        console.log(resultado.coords.latitude);

        this.model.setCoords(resultado.coords);

        console.log(this.model);
        this.shouldSend = true;

      }).catch((err) => console.log(err));
      console.log(this.model);
    }else{
      // TO DO
      this.model.cleanCoords();
      console.log(this.model);
    }

  }

  save(){
    if(this.shouldSend){

      this.model.save().then(resultado => {
        this.model = new Transaction(null,"");
        this.navCtrl.pop();
      });

    }

     console.log(this.model);
  }

}
