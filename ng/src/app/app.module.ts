import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigComponent } from './navig/navig.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BRegisterComponent } from './bregister/bregister.component';
import { BloginComponent } from './blogin/blogin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    BRegisterComponent,
    BloginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
