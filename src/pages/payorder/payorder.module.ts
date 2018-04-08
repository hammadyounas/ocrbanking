import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayorderPage } from './payorder';

@NgModule({
  declarations: [
    PayorderPage,
  ],
  imports: [
    IonicPageModule.forChild(PayorderPage),
  ],
})
export class PayorderPageModule {}
