import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { MusicComponent } from './music/music.component';
import { ProgrammingComponent } from './programming/programming.component';


@NgModule({
  declarations: [
    MusicComponent,
    ProgrammingComponent
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }

