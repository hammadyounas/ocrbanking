import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup , FormControl ,FormArray } from '@angular/forms';
import { ListPage } from '../list/list';
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
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private formBuilder:FormBuilder
   ) {
     this.depositForm = this.formBuilder.group({
            ammount : ['',Validators.required],
            currency: 'pkr',
            depositType: ['',Validators.required],
          })
  }
  depositform(){
    console.log("form",this.depositForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }


  Logout() {
    this.navCtrl.setRoot(ListPage);

  }



}
