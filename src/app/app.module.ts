import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { PostcodeInputComponent } from './postcode-input/postcode-input.component';

import { PostcodeService } from './shared/services/postcode.service';


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
    })
  ],
  providers: [ PostcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
