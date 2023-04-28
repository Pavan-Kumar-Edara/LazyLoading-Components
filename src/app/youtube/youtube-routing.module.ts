import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { ProgrammingComponent } from './programming/programming.component';

const routes: Routes = [
  {path:"music",component:MusicComponent},
  {path:"programming",component:ProgrammingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }



