import { BrowserModule, Title  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ChallengeComponent } from './challenge/challenge.component';

// google maps
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    AboutUsComponent,
    ServicesComponent,
    ChallengeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCixK-I-lHch_t6_9q_Qv-hHyH2Fjb8BvU'
    })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
