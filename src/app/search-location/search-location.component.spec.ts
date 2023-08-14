import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  SearchLocationComponent,
  getCityAndCountry,
} from './search-location.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchLocationComponent', () => {
  let component: SearchLocationComponent;
  let fixture: ComponentFixture<SearchLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
      ],
      declarations: [SearchLocationComponent],
    });
    fixture = TestBed.createComponent(SearchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('util', () => {
  describe('extract city and country from the input string', () => {
    it('extracts London and GB from string "London, GB"', () => {
      const TEST_INPUT = 'London, GB';
      const data = getCityAndCountry(TEST_INPUT);
      expect(data.city).toBe('London');
    });
    it('extracts empty string from empty string', () => {
      const TEST_INPUT = '';
      const data = getCityAndCountry(TEST_INPUT);
      expect(data.city).toBe('');
    });
    it('extracts empty string from London', () => {
      const TEST_INPUT = 'London';
      const data = getCityAndCountry(TEST_INPUT);
      expect(data.city).toBe(TEST_INPUT);
      expect(data.country).toBeUndefined();
    });
  });
});
