import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MapComponent } from './components/map/map.component';
import { CityTilesComponent } from './components/city-tiles/city-tiles.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    MapComponent,
    CityTilesComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatIconModule
  ]
})
export class LandingModule { }
