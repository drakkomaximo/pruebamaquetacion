import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './myComponents/user/user.component';
import { InfoComponent } from './myComponents/info/info.component';
import { FooterComponent } from './myComponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
