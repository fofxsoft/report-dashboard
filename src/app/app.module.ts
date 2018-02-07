import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [AppComponent, NavComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
