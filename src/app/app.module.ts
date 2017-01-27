import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { Transactions } from '../pages/transactions/transactions';
import { Adding } from '../pages/adding/adding';
import { Map } from '../pages/map/map';
import { ZonaSegura } from '../pages/zona-segura/zona-segura';
import { GeolocationService } from '../services/geolocation.service';
import { HomePage } from '../pages/home/home';
import { AtractivosTuristicos } from '../pages/atractivos-turisticos/atractivos-turisticos';

import { MainService } from '../services/main.service';
import { Eventos } from '../pages/eventos/eventos';
import { ConnectivityService } from '../services/connectivity.service';



@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    Transactions,
    Adding,
    Map,
    Eventos,
    ZonaSegura,
    HomePage,
    AtractivosTuristicos
  ],
  imports: [
    // IonicModule.forRoot(MyApp)

    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      platforms: {
        android: {
          tabsPlacement: 'top'
        },
        ios: {
          tabsPlacement: 'top'
        },
        windows:
        {
          tabsPlacement: 'top'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
    Transactions,
    Adding,
    Map,
    Eventos,
    ZonaSegura,
    HomePage,
    AtractivosTuristicos
  ],
  providers: [GeolocationService, MainService, ConnectivityService]
})
export class AppModule { }
