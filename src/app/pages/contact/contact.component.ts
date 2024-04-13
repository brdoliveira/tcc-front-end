import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  locationInfo = 'Select a location to see the info';

  constructor() { }

  ngOnInit(): void {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

    map.on('click', (e: L.LeafletMouseEvent) => {
      this.locationInfo = `You clicked the map at latitude: ${e.latlng.lat} and longitude: ${e.latlng.lng}`;
    });
  }
}
