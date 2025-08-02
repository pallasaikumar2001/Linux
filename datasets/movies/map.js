const data=require('./movies.json');

// list all movie titles
const movieTitles=data.map(item=>item.Title);
console.log(movieTitles)

//list all directors
const directors=data.map(item=>item.Director)
const dir=new Set(directors)
console.log(dir)

//title with rating
const titlewithrating=data.map(item=>item.Title+" : "+item.Rating)
console.log(titlewithrating)

//"The Shawshank Redemption (1994)"
const str=data.map(item=>item.Title+`(${item.Year})`)
console.log(str)

//"Title: The Godfather, Directed by: Francis Ford Coppola"
const out=data.map(item=>`Title:${item.Title}, Directed by:${item.Director}`)
console.log(out)


