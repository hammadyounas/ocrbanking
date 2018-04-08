import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ListPage } from '../list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the PayorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'payorder',
  templateUrl: 'payorder.html',
})
export class PayorderPage {
  private payorderForm: FormGroup;


  qrData = [];

  createdCode = null;
  scannedCode = null;


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,private barcodeScanner: BarcodeScanner) {
    this.payorderForm = this.fb.group({
      currency:['',Validators.required],
      payorderType: ['', Validators.required],
      ammount: ['', Validators.required],
      befName: ['', Validators.required],
      befAddress: [''],
      CNIC: [''],
      befAccount: [''],
      befBank: ['']
    })
  }
  payorderform(){
    console.log("payorderForm",this.payorderForm.value);

    this.qrData.push(this.payorderForm.value.currency);
    this.qrData.push(this.payorderForm.value.payorderType)
    this.qrData.push(this.payorderForm.value.ammount)
    this.qrData.push(this.payorderForm.value.befName)
    this.qrData.push(this.payorderForm.value.befAddress)
    this.qrData.push(this.payorderForm.value.CNIC)
    this.qrData.push(this.payorderForm.value.befAccount)
    this.qrData.push(this.payorderForm.value.befBank)
    

    this.createCode();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayorderPage');
  }


  Logout() {
    this.navCtrl.setRoot(ListPage);

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




  
}