import apiConfig from '../../assets/apiConfig.json';

export function getFetchUrl(city: string, country: string) {
  const url =
    apiConfig.location_api +
    'direct?q=' +
    city +
    ',,' +
    country +
    '&limit=3&appid=' +
    apiConfig.api_key;
  return url;
}

export function getUrlFromParams(latitude: number, longitude: number) {
  const url =
    apiConfig.weather_api +
    'weather?lat=' +
    latitude +
    '&lon=' +
    longitude +
    '&appid=' +
    apiConfig.api_key +
    '&units=metric';
  return url;
}

export function getIconUrl(weatherIcon: string) {
  const url = apiConfig.icon_url + weatherIcon + '@2x.png';
  return url;
}
