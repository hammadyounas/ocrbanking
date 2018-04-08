import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {
  dropDown = false;
  public withdrawForm: FormGroup;



  qrData = [];

  createdCode = null;
  scannedCode = null;



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private fb: FormBuilder) {
    this.withdrawForm = this.fb.group({
      pay: ['', Validators.required],
      date: ['', Validators.required],
      ammount: ['', Validators.required],
      befName: ['', Validators.required],
      befCNIC: ['', Validators.required],
      befAccount: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawPage');
  }
  f(val) {
    if (val == "cash") {
      console.log("val in withdraw", val);
      this.dropDown = true;
      // this.withdrawForm = this.fb.group({
      //   pay:['',Validators.required],
      //   date:['',Validators.required],
      //   ammount:['',Validators.required]
      // })
    }
    else if (val != "cash || Cash") {
      this.dropDown = false;
      // this.withdrawForm = this.fb.group({
      //   pay:['',Validators.required],
      //   date:['',Validators.required],
      //   ammount:['',Validators.required],
      //   befName:['',Validators.required],
      //   befCNIC:['',Validators.required],
      //   befAccount:['',Validators.required]
      // })
    }
  }
  withdrawform() {
    console.log("value in withdraw", this.withdrawForm.value);
  }
  Logout() {
    this.navCtrl.setRoot(ListPage);

  }



  submit() {
    console.log(this.withdrawForm.value);

    this.qrData.push(this.withdrawForm.value.pay);
    this.qrData.push(this.withdrawForm.value.date);
    this.qrData.push(this.withdrawForm.value.ammount);
    this.qrData.push(this.withdrawForm.value.befName);
    this.qrData.push(this.withdrawForm.value.befCNIC);
    this.qrData.push(this.withdrawForm.value.befAccount);

    this.createCode();  
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