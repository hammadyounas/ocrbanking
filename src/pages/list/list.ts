import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }


  login(email, pass) {
    console.log(email);
    console.log(pass);
    
    
    // this.afAuth.auth.signInWithEmailAndPassword('test@test.com', '123456').then(data => {
    //   console.log(data);
        
      this.navCtrl.push(DashboardPage)

    // }).catch(err => {
    //   this.navCtrl.push(HomePage)
    //   console.log(err);
      
    // })
  }
}
