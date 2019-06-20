import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MaterialModule } from './material/material.module';
import { Globals } from './globals';
import { GeoLocComponent } from './geo-loc/geo-loc.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AppComponent,
    GeoLocComponent,
    LeitorQrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    ZXingScannerModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
