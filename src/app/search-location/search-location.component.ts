import { ApiHttpService } from './../services/api-http.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getFetchUrl } from '../services/url-paths';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.sass'],
})
export class SearchLocationComponent {
  searched = false;
  loaded = false;
  displayedColumns: string[] = ['name', 'country'];
  dataSource:Location[] = [];

  constructor(private apiService: ApiHttpService, private router: Router) {}

  getLocations(cityCountry: string) {
    const data = getCityAndCountry(cityCountry);
    const city = data.city;
    if (!city) {
      console.error('Missing parameters in query');
      return;
    }
    const country = data.country;
    const fetchUrl = getFetchUrl(city, country);
    this.searched = true;
    this.apiService.get(fetchUrl).subscribe({
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

export function getCityAndCountry(inputString: string) {
  const location = inputString.split(',', 2);
  const trimmedLocation = location.map((element) => {
    return element.trim();
  });
  return {
    city: trimmedLocation[0],
    country: trimmedLocation[1],
  };
}

interface Location {
  name: string;
  local_names?: {};
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
