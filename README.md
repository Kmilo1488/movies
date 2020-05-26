# Movies test

The steps to start the application.

## Backend

* `cd backend`
Go to the backend folder.

* `bundle install`
install gems

* `rails db:create`
Create DB.

* `rails db:migrate`
Run migrations.

* `rails db:seed`
Create seeds.

* `rails s`
Start server (localhost:3000).

## Frontend

* `cd frontend`
Go to the frontend folder.

* `yarn install`
install packages

* `yarn start`
Start app (localhost:3001).


## Endpoints

* `http://localhost:3000/api/v1/movies/search?name="title"` Search movies by title from TMDB
* `http://localhost:3000/api/v1/movies` Get all movies from DB
* `http://localhost:3000/api/v1/movies` Post creates a new movie in the DB
`{
            "title": "Title movie",
            "overview": "Overview movie",
            "release_date": "2020-05-30"
}`
* `http://localhost:3000/api/v1/movies?key_word="title or overview"` Search movies by title or description from DB
