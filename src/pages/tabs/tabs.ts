import { Component } from '@angular/core';

 import { Transactions } from '../transactions/transactions';
import { ContactPage } from '../contact/contact';
import { Map } from '../map/map';
import { Eventos } from '../eventos/eventos';
import { HomePage } from '../home/home';
import { Transactions } from '../transactions/transactions';
import { Adding } from '../adding/adding';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = Map;
  tab3Root: any = ContactPage;
  tab4Root: any = Eventos;
  tab5Root: any = Adding;
  tab6Root: any = Transactions;

  constructor() {

  }
}
