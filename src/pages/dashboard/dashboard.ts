import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepositPage } from '../deposit/deposit';
import { PayorderPage } from '../payorder/payorder'
import { WithdrawPage } from '../withdraw/withdraw'
import { ListPage } from '../list/list'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';





/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  qrData = [{'asdsad': "asdsadsa"}, {'asdasdsd': "asdsadsad"}]

  createdCode = null;
  scannedCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }


  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
      console.log('Error: ', err);
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  openDeposit() {
    this.navCtrl.push(DepositPage);
  }


  openWithdraw() {
    this.navCtrl.push(WithdrawPage);

  }


  openPayorder() {
    this.navCtrl.push(PayorderPage);

  }

  Logout() {
    this.navCtrl.setRoot(ListPage);

  }

}