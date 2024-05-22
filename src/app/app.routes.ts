import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent, canActivate: [authGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [authGuard] },
{path: '**', component: PageNotFoundComponent}
];
