# weatherJournalFWD
## Introduction
A project related to the FWD web development scholarship by Udacity that requires calling an API then retrieve data from it.

## Table of Contents
* [Overview](#overview)
* [Perquisites](#perquisites)
* [Downloading The Web Application](#downloading-the-web-application)
* [How to Install?](#how-to-install)
* [How to run after Installation?](#how-to-run-after-installation)
* [Dependencies](#dependencies)
* [API](#api)
* [User Interface](#user-interface)
* [How it works?](#how-it-works)

## Overview
This project requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

## Perquisites
[Node.js](https://en.wikipedia.org/wiki/Node.js/ "Node.js info"): A back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

You must install Node.js to be able to run this application. Download it from [here](https://nodejs.org/en/download/ "Node.js download").

## Downloading The Web Application
Simply download the project's GitHub Zip file from [here](https://github.com/99zarka/weatherJournalFWD/archive/refs/heads/main.zip "project download").

## How to Install?
1. Extract zip file.
2. Open `install dependencies.bat`.

Cheers, You may try the project now.

## How to run after Installation?
You may run the whole app (including the server) with `webAPP.bat`.

OR

You could also run the server separately (using `run server only.bat`) then open the webpage from `\website\index.html`.

You have the option to open the webpage online from [here](https://99zarka.github.io/weatherJournalFWD/website/ "online web page"), but you will still have to run the server locally so that the app can work properly.

## Dependencies
- [Express](https://expressjs.com/ "Express info"): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html "body-parser info"): Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
- [CORS](http://expressjs.com/en/resources/middleware/cors.html "CORS info"): A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.


## API
[OpenWeatherMap](https://en.wikipedia.org/wiki/OpenWeatherMap "OpenWeatherMap info") is an online service that provides global weather data via API, including current weather data, forecasts, nowcasts and historical weather data for any geographical location.

You can inspect all the data and different APIs provided by openweathermap from [here](https://en.wikipedia.org/wiki/OpenWeatherMap "OpenWeatherMap APIs")

## User Interface
The webpage is responsive and mobile friendly. You can try the UI online from [here](https://99zarka.github.io/weatherJournalFWD/website/ "online web page").

P.S: If the server is not running locally, the web app will not work as expected and the user gets an error message.

## How it works?
1. The weather data is imported from OpenWeatherMap API to the client-side.
2. Data is exported to server-side.
3. Finally the data is sent from server-side to client-side in order to be viewed into the UI.

This diagram will be more than enough to make things clear on how data flows.

![data flow](https://user-images.githubusercontent.com/53001011/132176836-954b2be3-fdd9-459e-86c9-586e98fb9ab3.png "Flow chart diagram")
