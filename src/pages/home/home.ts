import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PERSONS } from '../../PERSONS'
import { Person } from '../../Person'
import { Dialoguepage } from '../dialogue/dialogue'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

}
persons:Person[] = PERSONS;
  onSelect(item):void {
    console.log(item)
    this.navCtrl.push('Dialoguepage',{'id':item.id});
  }
}
