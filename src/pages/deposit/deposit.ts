import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ListPage } from '../list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {
  private depositForm: FormGroup;

  qrData = [];

  createdCode = null;
  scannedCode = null;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private barcodeScanner: BarcodeScanner
  ) {
    this.depositForm = this.formBuilder.group({
      ammount: ['', Validators.required],
      currency: 'pkr',
      depositType: ['', Validators.required],
    })
  }


  depositform() {
    console.log("form", this.depositForm.value);

    this.qrData = [];

      this.qrData.push(this.depositForm.value.ammount);
      this.qrData.push(this.depositForm.value.currency);
      this.qrData.push(this.depositForm.value.depositType);
    
      console.log(this.qrData);
      
      this.createCode();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
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





  Logout() {
    this.navCtrl.setRoot(ListPage);

  }



}
