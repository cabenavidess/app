import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMapsLatLng } from 'ionic-native';

import { GeolocationService } from '../../services/geolocation.service';

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class Map {

  constructor(public navCtrl: NavController, public geolocator : GeolocationService) {}

  ionViewDidLoad() {
    this.geolocator.get().then((result)=>{
      this.loadMap(result.coords.latitude, result.coords.longitude);
    }).catch((err)=> console.log(err));

    console.log('Hello Map Page');
  }

  loadMap(lat, lng){

    let location: GoogleMapsLatLng = new GoogleMapsLatLng(lat,lng);

    new GoogleMap("map",{
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      "camera": {
        'latLng': location,
        'tilt': 30,
        'zoom': 15,
        'bearing': 50,
      }
    })
  }

}
