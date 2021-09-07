import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },

  // Registration & Login
  { path: 'login', component: PageNotFoundComponent },
  { path: 'register', component: PageNotFoundComponent },

  { path: 'user/:id', component: PageNotFoundComponent },
  { path: 'user/settings', component: PageNotFoundComponent },

  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
