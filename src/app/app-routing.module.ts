import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {UsersComponent} from "./users/users.component";
import {UsersActiveComponent} from "./users-active/users-active.component";
import {UsersInactiveComponent} from "./users-inactive/users-inactive.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const rutas = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'users/:userId/:name',
    component: UsersComponent,
    children: [
      {
        path: 'active',
        component: UsersActiveComponent
      },
      {
        path: 'inactive',
        component: UsersInactiveComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas, {
      enableTracing: true,
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
