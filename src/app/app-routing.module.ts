import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {MoviesComponent} from './movies/movies.component';
import {TvseriesComponent} from './tvseries/tvseries.component';
import {EditMenuComponent} from './admin/edit-menu/edit-menu.component';
import {EditMovieComponent} from './admin/edit-movie/edit-movie.component';
import {EditTvseriesComponent} from './admin/edit-tvseries/edit-tvseries.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'admin', component: BoardAdminComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'tvseries', component: TvseriesComponent},
    {path: 'edit', component: EditMenuComponent},
    {path: 'edit/movies/:id', component: EditMovieComponent},
    {path: 'edit/tvseries', component: EditTvseriesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
