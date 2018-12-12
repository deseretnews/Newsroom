import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VenuesComponent } from './pages/venues/venues.component';
import { AlmanacComponent } from './pages/almanac/almanac.component';
import { PersonComponent } from './components/almanac/person/person.component';
import { CallingComponent } from './components/almanac/calling/calling.component';
import { PeopleComponent } from './components/almanac/people/people.component';
import { LoadingComponent } from './components/almanac/loading/loading.component';
import { CountriesComponent } from './components/almanac/countries/countries.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'venues', component: VenuesComponent },
  { path: 'almanac', component: AlmanacComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    VenuesComponent,
    AlmanacComponent,
    PersonComponent,
    CallingComponent,
    PeopleComponent,
    LoadingComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
