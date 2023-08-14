import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  WeatherDisplayComponent,
  getInfoFromParams,
} from './weather-display.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

describe('WeatherDisplayComponent', () => {
  let component: WeatherDisplayComponent;
  let fixture: ComponentFixture<WeatherDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,
        MatProgressSpinnerModule,
      ],
      declarations: [WeatherDisplayComponent],
    });
    fixture = TestBed.createComponent(WeatherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('util', () => {
  describe('extract name, country, latitude and longitude from the input object', () => {
    it('extracts name: "London", country: "GB", latitude: 51.5073219 and longitude: -0.1276474 from {name: "London", country: "GB", lat: 51.5073219, lon: -0.1276474,}', () => {
      const TEST_INPUT = {
        name: 'London',
        country: 'GB',
        lat: 51.5073219,
        lon: -0.1276474,
      };
      const data = getInfoFromParams(TEST_INPUT);
      expect(data).not.toBeNull();
      expect(data?.name).toBe('London');
      expect(data?.country).toBe('GB');
      expect(data?.latitude).toBe(51.5073219);
      expect(data?.longitude).toBe(-0.1276474);
    });
    it('returns null from empty object', () => {
      const TEST_INPUT = {};
      const data = getInfoFromParams(TEST_INPUT);
      expect(data).toBeNull();
    });
    it('returns null from {name: "London"}', () => {
      const TEST_INPUT = { name: 'London' };
      const data = getInfoFromParams(TEST_INPUT);
      expect(data).toBeNull();
    });
  });
});
