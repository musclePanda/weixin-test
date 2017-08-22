import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular'
import { NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-dialogue',
  templateUrl: 'dialogue.html'
})
export class Dialoguepage {

  num:string;
  constructor(public navParams: NavParams) {}
// 获取参数
  ngOnInit(): void {
    console.log(this.navParams.get('id'))
    this.num = this.navParams.get('id')
  }
}
