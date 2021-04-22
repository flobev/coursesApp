import {NgModule} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { YoutubeVideoComponent } from './youtube-video.component';

@NgModule({
  imports: [
    YouTubePlayerModule,
  ],
  declarations: [YoutubeVideoComponent],
  exports: [YoutubeVideoComponent]
})
export class YoutubeVideoModule {}