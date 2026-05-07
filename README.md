# WebGIS & Full-Stack Orchestration
**Student:** Lauren Bolton  
**Course:** GIST 604B – Open Source GIS  
**Module 6:** WebGIS & Full-Stack Orchestration  
**University of Arizona**  

## Project Description
This project demonstrates client-side web mapping using HTML, JavaScript, and Leaflet. It builds an interactive web map with GeoJSON data and deploys it using GitHub Pages.

## Tools and Technologies
- HTML
- JavaScript
- Leaflet
- Git
- GitHub Pages
- Node.js (npm)

## What I Did
- Set up a local web development environment using VS Code, Git, and npm
- Built an interactive Leaflet web map using HTML, CSS, and JavaScript
- Loaded and styled GeoJSON datasets representing parks, cycleways, and bike stations in Boston
- Added interactive popups using attribute data
- Organized map layers using layer groups and deployed the final map using GitHub Pages

## How to View/Run
- Clone the repository and install dependencies with `npm install`
- Start the local server using `npm start`
- Open `http://localhost:8080` in a browser to view the web map locally
- View the published [Boston Parks and Bike Infrastructure Map](https://laurbolton.github.io/gist604b-webgis-leaflet-sp26/)

## Repository Structure
    .
    ├── data/                 # GeoJSON datasets (parks, cycleways, bike stations)
    ├── js/                   # JavaScript for Leaflet map logic
    ├── css/                  # Styling for web map
    ├── index.html            # Main web map page
    ├── package.json          # Project dependencies
    ├── package-lock.json     # Locked dependency versions
    ├── .gitignore            # Files excluded from Git tracking
    └── README.md             # Project documentation
