# movie-magic
Express.js Workshop from JS Back-End SoftUni Course

## Workshop 1 - Express and Templating

### Setup
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

### Architecture and dynamic rendering
- [x] Add home controller
- [x] Add Movie model and data
- [x] Add movieService
- [x] Render dynamic movies on home page

### Create Movie
- [x] Add Movie Controller and show create page
- [x]  Add routes
- [x]  Add 404 page
- [x]  Add URL-encoded form data parser `express.urlencoded()`
- [x]  Refactor create page
- [x]  Add save metod in Movie model and create in movieService
- [x]  Generate unique id for created movie `npm install uuid`
- [x]  Add data persistance using fs/promises

### Details Movie
- [x]  Add movie details page and update href details button in home page
- [x]  Add find movie by id to Movie model
- [x]  Add get movie by id to movie service
- [x]  Add route for detail page with move parameters
- [x]  Render details page with dynamic data 
- [x]  Show rating with stars

### Search

- [x]  Add search page rout and show static search page
- [x]  Create movie partial and show all movies in search page
- [x]  Modify search form
- [x]  Add search by
    - [x] title case insensitive 
    - [x] year 
    - [x] genre case insensitive 
- [x] Remember search words

### Bonuses

- [x] Show dynamic page title

## Workshop 2 - MongoDB Database

### Precondition

- [x] Install MongoDB Community Server or use container 

      `docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret -v mongodb_data:/data/db mongo`

- [x] Install Mongosh CLI оr use it from the container

      `docker exec -it mongodb mongosh -u admin -p secret`

- [x] Install Compass GUI and connect `mongodb://admin:secret@localhost:27017`

### Setup Database

- [x] Install mongoose `npm i mongoose`
- [x] Connect to DB

### Refactor Movies to use mongoose
 - [x] Add movie model
   - [x] Create movie schema
   - [x] Create movie model
 - [x] Import data to database
 - [x] Fix own property handlebars problem with lean method
 - [x] General fix for own property problem
 - [x] Refactor details, create, search

### Add Cast

- [x] Add resources
- [x] Create Cast Controller and render cast create page
- [x] Add folder views/casts for catst views
- [x] Add cast Model
- [x] Add cast service and create method
- [x] Refactor create form and add create Cast functionallity

### Create relation bteween Cast and Movie

- [x] Add button attach cast in Movie details page
- [x] Add attach cast page with dynamic data
- [x] Show cast list in attach select
- [x] Add one to many relation between Movie and Cast models
- [x] Attach cast to movie

### Show Cast Details (population)

- [x] Add service methot to filter casts
- [x] Show casts on details
- [x] Get movie casts using population

### Bonuses

- [x] Show only not attached casts in attach page
- [x] Env variables
- [x] Add movie views to a folder

## Workshop 3 - Session and Authentication

### Initial Setup

- [x] Add resources

### Login

- [x] Add authController and show register page

