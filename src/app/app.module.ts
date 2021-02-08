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
import {EditTvseriesComponent} from './admin/edit-tvseries/edit-tvseries.component';
import {MaterialModule} from './modules/material/material.module';
import {MoviesTableComponent} from './admin/movies-table/movies-table.component';
import {TvseriesTableComponent} from './admin/tvseries-table/tvseries-table.component';
import {CreateMovieComponent} from './admin/create-movie/create-movie.component';
import {CreateTvseriesComponent} from './admin/create-tvseries/create-tvseries.component';
import {UsersTableComponent} from './admin/users-table/users-table.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MovieDetailsComponent, SafePipe} from './movie-details/movie-details.component';
import {TvseriesDetailsComponent} from './tvseries-details/tvseries-details.component';
import {ConfirmDialogComponent} from './admin/confirm-dialog/confirm-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
      EditTvseriesComponent,
      MoviesTableComponent,
      TvseriesTableComponent,
      CreateMovieComponent,
      CreateTvseriesComponent,
      UsersTableComponent,
      NotFoundComponent,
      MovieDetailsComponent,
      TvseriesDetailsComponent,
      SafePipe,
      ConfirmDialogComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      MaterialModule,
      BrowserAnimationsModule
  ],
    providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
