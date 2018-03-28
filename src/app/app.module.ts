import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { PostcodeInputComponent } from './postcode-input/postcode-input.component';
import { PostcodeService } from './shared/services/postcode.service';

//Material imports
import {MatButtonModule, MatCardModule, MatInputModule, MatButtonToggleModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostcodeInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBztRj0Y6DC648TraLkkMXwyXXuJHixQ1c'
    }),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  providers: [ PostcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
