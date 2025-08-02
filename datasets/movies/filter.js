const data=require('./movies.json');

//Get all movies with a rating above 9.
const moviesGt9=data.filter(item=>item.Rating>9)
console.log(moviesGt9)

//Filter movies released after the year 2000
const moviesAfter2000=data.filter(item=>item.Year>2000)
.map(item=>item.Title)
console.log(moviesAfter2000)

//Get all movies in the "Action" genre.
const actionMovies=data.filter(item=>item.Genre==="Action")
.map(item=>item.Title)
console.log(actionMovies)

//Get all movies directed by Christopher Nolan.
const NolanMovies=data.filter(item=>item.Director==="Christopher Nolan")
.map(item=>item.Title);
console.log(NolanMovies)
