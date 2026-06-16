# Metric Unit Converter

A simple and responsive web application that converts values between common metric and imperial units. Users can enter a number and instantly view conversions for length, volume, and mass with results displayed in both directions.

## Features

* Convert **Meters ↔ Feet**
* Convert **Liters ↔ Gallons**
* Convert **Kilograms ↔ Pounds**
* Responsive design that works across desktop and mobile devices
* Displays conversion values with up to **3 decimal places**
* Handles `0` input with default conversion values
* Clean and minimal user interface built with HTML, CSS, and JavaScript

## Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive layout
* **Vanilla JavaScript** – Conversion logic and DOM manipulation

## Conversion Factors

| Unit   | Conversion                |
| ------ | ------------------------- |
| Length | 1 meter = 3.281 feet      |
| Volume | 1 liter = 0.264 gallons   |
| Mass   | 1 kilogram = 2.204 pounds |

## How It Works

1. Enter a numeric value in the input field.
2. Click the **Convert** button.
3. The application calculates and displays:

   * Meters to Feet and Feet to Meters
   * Liters to Gallons and Gallons to Liters
   * Kilograms to Pounds and Pounds to Kilograms

## Project Structure

```text
├── index.html      # Application structure
├── styles.css      # Styling and responsive design
└── app.js          # Conversion logic and event handling
```

## Future Improvements

* Perform conversions automatically while typing
* Validate empty or invalid inputs with user-friendly messages
* Add support for additional units such as Celsius/Fahrenheit and Kilometers/Miles
* Enable conversion on pressing the Enter key
* Improve accessibility and keyboard navigation

## Live Demo

[View the Metric Unit Converter](https://unitconverter4712.netlify.app/)

This project is ideal for beginners learning DOM manipulation, event handling, user input processing, and basic mathematical operations in JavaScript.
