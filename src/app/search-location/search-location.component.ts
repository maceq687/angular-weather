import { ApiHttpService } from './../services/api-http.service';
import { Component } from '@angular/core';
import tempData from '../../assets/location.json';
import apiConfig from '../../assets/apiConfig.json';
import { Router } from '@angular/router';

const LocationsData: Location[] = tempData;

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.sass'],
})
export class SearchLocationComponent {
  searched = false;
  loaded = false;
  displayedColumns: string[] = ['name', 'country'];
  dataSource = LocationsData;
  api = apiConfig;

  constructor(private apiService: ApiHttpService, private router: Router) {}

  getLocations(cityCountry: string) {
    this.searched = true;
    var location = cityCountry.split(',', 2);
    var trimLocation = location.map((element) => {
      return element.trim();
    });
    var city = trimLocation[0];
    var country = trimLocation[1];
    var url =
      this.api.location_api +
      'direct?q=' +
      city +
      ',,' +
      country +
      '&limit=3&appid=' +
      this.api.api_key;
    this.apiService.get(url).subscribe({
      next: (data) => {
        this.dataSource = data as unknown as Location[];
      },
      complete: () => {
        this.loaded = true;
      },
      error: (err) => console.error(err),
    });
  }

  selectedLocation(selectedLocation: Location) {
    this.router.navigate(['/weather'], {
      queryParams: {
        name: selectedLocation.name,
        country: selectedLocation.country,
        lat: selectedLocation.lat,
        lon: selectedLocation.lon,
      },
    });
  }
}

export interface Location {
  name: string;
  local_names?: {};
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
