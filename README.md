# AngularWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Objective:  
Develop an interactive weather dashboard using Angular to fetch and display weather data from a public API in an engaging and user-friendly manner.  

## Time Limit:  
Up to 5 hours

## Requirements:
1. Setup:
    - Set up a new Angular project.
    - Create necessary components and services for the project structure.
2. API Integration:
    - Choose a public weather API and acquire an API key (e.g., OpenWeatherMap, WeatherAPI).
    - Implement a service to handle API requests and responses, fetching weather data based on location.
3. User Interface:
    - Design a responsive user interface that includes:
    - A search bar for location input.
    - Display of weather information: temperature, conditions, humidity, etc.
    - Weather condition icons or images.
4. Temperature Display as Gauge:
    - Implement a gauge component to display the temperature visually.
    - Define temperature color ranges:
        - Below 0°C: Blue
        - 0°C to 10°C: Blue transitioning to Yellow
        - 10°C to 20°C: Yellow transitioning to Orange
        - 20°C to 30°C: Orange transitioning to Red
        - Above 30°C: Red
5. Data Display:
    - Fetch and display weather data based on the location entered.
    - Display temperature in Celsius by using the gauge component.
6. Enhancements:
    - Implement error handling for failed API requests or incorrect input.
    - Add features like a 5-day forecast, weather details (wind speed, pressure, etc.), and dynamic backgrounds based on weather.
    - Incorporate animations for smoother UI interactions.
7. Testing:
    - Write unit tests to ensure the functionality of critical components and services.
    - Cover scenarios like successful API responses, error handling, and UI rendering.
8. Code Quality:
    - Utilize clean code practices, proper naming conventions, and modular structure.
    - Showcase proficiency with Angular components, services, and data binding.
    - Aim for well-commented code that demonstrates understanding.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
