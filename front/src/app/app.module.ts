import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {routes} from './app-routing.module';
import {ApiService} from './api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {AuthInterceptor} from './auth.interceptor';
import {ProfileMenuComponent} from './profile-menu/profile-menu.component';
import {AuthService} from './services/auth.service';
import {LocalStorageService} from "./services/local-storage.service";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    
    RouterModule.forRoot(routes),
  ],
  providers: [
    ApiService,
    
    AuthService,
    
    TokenStorageService,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
