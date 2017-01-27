import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Transaction } from '../../database';

import { Adding } from '../adding/adding';

/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {

  tittle: string = "Movimientos";
  transactions: any;
  addingPage = Adding;

  constructor(public navCtrl: NavController) {}

  // ionViewDidLoad() {
  ionViewWillEnter(){
    // let transaction = new Transaction(77,"Primera transación");
    // transaction.save();
    // console.log(transaction);
    this.loadTransactions();
  }

  loadTransactions(){
    Transaction.all()
               .then((resultados) => {
                 this.transactions = resultados
                 console.log(this.transactions);
               });
  }
}
