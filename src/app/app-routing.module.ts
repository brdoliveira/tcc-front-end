import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpsComponent } from './pages/helps/helps.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { AuthGuard } from './core/authentication/auth.guard';

const routes: Routes = [
    { path: '/home', component: HomeComponent },
    { path: '/helps', component: HelpsComponent},
    { path: '/contact', component: ContactComponent},
    { path: '/about', component: AboutComponent},
    { path: '/login', component: LoginComponent},
    { path: '/details', component: DetailsComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
