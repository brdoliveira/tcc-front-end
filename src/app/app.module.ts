import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/components/shared.module';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpsComponent } from './pages/helps/helps.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactFormComponent,
    HelpsComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [SharedModule, BrowserModule, AppRoutingModule, AutoCompleteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
