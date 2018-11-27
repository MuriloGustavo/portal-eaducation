import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TurmasPage} from '../turmas/turmas'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  openPage() {
    this.navCtrl.push(TurmasPage);
  }

}
