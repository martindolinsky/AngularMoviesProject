import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import {MoviesComponent} from './movies/movies.component';
import {TvseriesComponent} from './tvseries/tvseries.component';
import {EditMovieComponent} from './admin/edit-movie/edit-movie.component';
import {EditMenuComponent} from './admin/edit-menu/edit-menu.component';
import {EditTvseriesComponent} from './admin/edit-tvseries/edit-tvseries.component';
import {MaterialModule} from './modules/material/material.module';
import {MoviesTableComponent} from './admin/movies-table/movies-table.component';
import {TvseriesTableComponent} from './admin/tvseries-table/tvseries-table.component';
import {CreateMovieComponent} from './admin/create-movie/create-movie.component';
import {CreateTvseriesComponent} from './admin/create-tvseries/create-tvseries.component';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      NavbarComponent,
      ProfileComponent,
      BoardAdminComponent,
      MoviesComponent,
      TvseriesComponent,
      EditMovieComponent,
      EditMenuComponent,
      EditTvseriesComponent,
      MoviesTableComponent,
      TvseriesTableComponent,
      CreateMovieComponent,
      CreateTvseriesComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      MaterialModule
  ],
    providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
