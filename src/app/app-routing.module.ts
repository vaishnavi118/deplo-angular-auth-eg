import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
//import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
            path: '',
            component: HomeComponent
          },
          {
            path: 'login',
            component: LoginComponent
          },
  //        {
  //          path: 'game',
  //          component: GameComponent,
  //          canActivate: [ AuthGuardService ]
  //        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
