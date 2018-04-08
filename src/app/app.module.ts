import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { DepositPage } from '../pages/deposit/deposit';
import { PayorderPage } from '../pages/payorder/payorder';
import { DashboardPage } from '../pages/dashboard/dashboard';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAtHDPAFUrhKx0ICsDcB9hZu2M6bj3eewI",
  authDomain: "gaditech1.firebaseapp.com",
  databaseURL: "https://gaditech1.firebaseio.com",
  projectId: "gaditech1",
  storageBucket: "gaditech1.appspot.com",
  messagingSenderId: "672211953227"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WithdrawPage,
    DepositPage,
    PayorderPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WithdrawPage,
    DepositPage,
    PayorderPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    AngularFireDatabase,
    AngularFireAuthModule
  ]
})
export class AppModule { }
