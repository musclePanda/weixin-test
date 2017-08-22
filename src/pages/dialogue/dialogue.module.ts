import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,IonicPageModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Dialoguepage } from './dialogue'
@NgModule({
  // 声明
  declarations: [
    Dialoguepage
  ],
  imports: [
  // 每个浏览器都要引入这个插件BrowserModule
    // BrowserModule,
    IonicPageModule.forChild(Dialoguepage)
  ],
  entryComponents: [
    Dialoguepage
  ]
})
export class dialoguepageModule {}
