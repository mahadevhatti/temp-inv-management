import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map', { static: true }) private mapEl!: ElementRef<HTMLDivElement>;
  private map?: L.Map;

  ngAfterViewInit(): void {
    this.map = L.map(this.mapEl.nativeElement, {
      center: [20.5937, 78.9629], // India (nice default)
      zoom: 5,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
    this.map = undefined;
  }
}
