import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FoterComponent } from './foter/foter.component';
import { MainComponent } from './main/main.component';
import { CryptoDetailsComponent } from './main/crypto-details/crypto-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'details',
    component: CryptoDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoterComponent,
    MainComponent,
    CryptoDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
