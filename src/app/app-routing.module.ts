import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {MoviesComponent} from './movies/movies.component';
import {TvseriesComponent} from './tvseries/tvseries.component';
import {EditMovieComponent} from './admin/edit-movie/edit-movie.component';
import {EditTvseriesComponent} from './admin/edit-tvseries/edit-tvseries.component';
import {MoviesTableComponent} from './admin/movies-table/movies-table.component';
import {TvseriesTableComponent} from './admin/tvseries-table/tvseries-table.component';
import {CreateMovieComponent} from './admin/create-movie/create-movie.component';
import {CreateTvseriesComponent} from './admin/create-tvseries/create-tvseries.component';
import {UsersTableComponent} from './admin/users-table/users-table.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {TvseriesDetailsComponent} from './tvseries-details/tvseries-details.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';

const routes: Routes = [
    {
        path: 'admin', component: BoardAdminComponent, canActivate: [AdminGuard],
        children: [
            {path: 'movies', component: MoviesTableComponent},
            {path: 'tvseries', component: TvseriesTableComponent},
            {path: 'users', component: UsersTableComponent},
        ]
    },
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'movies', component: MoviesComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'tvseries', component: TvseriesComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'edit/movies/:id', component: EditMovieComponent, canActivate: [AdminGuard]},
    {path: 'edit/tvseries/:id', component: EditTvseriesComponent, canActivate: [AdminGuard]},
    {path: 'create/movie', component: CreateMovieComponent, canActivate: [AdminGuard]},
    {path: 'create/tvseries', component: CreateTvseriesComponent, canActivate: [AdminGuard]},
    {path: 'movies/:id', component: MovieDetailsComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'tvseries/:id', component: TvseriesDetailsComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: '**', component: NotFoundComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
