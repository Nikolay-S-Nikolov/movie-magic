# movie-magic
Express.js Workshop from JS Back-End SoftUni Course

## Setup
- [x] Initialize Project
  - `npm init -y`
  - update package.json
    ```
    "start":"node src/index.js",
    "dev": "node --watch src/index.js"
    "type": "module"
    ```
- [x] Add Express Server `npm i express`
- [x] Add Workshop Resources
- [x] Add Handlebars `npm i express-handlebars`
- [x] Config debugging
- [x] Setup static files
- [x] Add layout
- [x] Add about page

## Architecture and dynamic rendering
- [x] Add home controller
- [x] Add Movie model and data
- [x] Add movieService
- [x] Render dynamic movies on home page

## Create Movie
- [x] Add Movie Controller and show create page
- [x]  Add routes
- [x]  Add 404 page
- [x]  Add URL-encoded form data parser `express.urlencoded()`
- [x]  Refactor create page
- [x]  Add save metod in Movie model and create in movieService
- [x]  Generate unique id for created movie `npm install uuid`
- [x]  Add data persistance using fs/promises

## Details Movie
- [x]  Add movie details page and update href details button in home page
- [x]  Add find movie by id to Movie model
- [x]  Add get movie by id to movie service
- [x]  Add route for detail page with move parameters