import { YoutubeVideoComponent } from './modals/youtube-video/youtube-video.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClientModule } from '@angular/common/http';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, YoutubeVideoComponent],
  entryComponents: [YoutubeVideoComponent],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, YouTubePlayerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NativeStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}
