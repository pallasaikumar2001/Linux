const data=require('./movies.json')

const rating9=data.filter(item=>item.Rating===9)
.map(item=>item.Title+ item.Rating)
console.log(rating9)

const nolanMovies=data.filter(item=>item.Director==="Christopher Nolan")
.map(item=>item.Title+" "+item.Director)
console.log(nolanMovies)

const moviesfrom1990=data.filter(item=>item.Year>=1990)
.map(item=>item.Title+" "+item.Year)
console.log(moviesfrom1990)

const crimeMovies=data.filter(item=>item.Genre==="Crime")
.map(item=>item.Title+" "+item.Genre)
console.log(crimeMovies)

const longerMovies=data.filter(item=>item.Runtime>150)
.map(item=>item.Title+" "+item.Runtime)
console.log(longerMovies)

const grossEarnings=data.filter(item=>item.Gross_Earning_in_Mil>100)
.map(item=>item.Title+" "+item.Gross_Earning_in_Mil)
console.log(grossEarnings)

const highMetaScore=data.filter(item=>item.Metascore>=90)
.map(item=>item.Title+" "+item.Metascore)
console.log(highMetaScore)

elijahActedMovies=data.filter(item=>item.Actor==="Elijah Wood")
.map(item=>item.Title+" "+item.Actor)
console.log(elijahActedMovies)

const notNA=data.filter(item=>item.Gross_Earning_in_Mil!="NA")
.map(item=>item.Title+" "+item.Gross_Earning_in_Mil)
console.log(notNA)

const  lt1mln=data.filter(item=>item.Votes<1000000)
.map(item=>item.Title+" "+item.Votes)
console.log(lt1mln)
