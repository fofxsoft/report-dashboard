import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatGridListModule
} from '@angular/material';

import { FusionChartsModule } from 'angular2-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Maps from 'fusioncharts/fusioncharts.maps';
import * as World from 'fusioncharts/maps/fusioncharts.world';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune';

import { EcpService } from './ecp.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { SalesComponent } from './sales/sales.component';

@NgModule({
    declarations: [AppComponent, NavComponent, SalesComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        FusionChartsModule.forRoot(FusionCharts, Charts, Maps, World, Zune),
        AppRoutingModule
    ],
    providers: [EcpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
