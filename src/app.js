const yargs = require('yargs');

const { addMovie, listMovies } = require('./utils')

const app = (yargsObj) => {
    if (yargsObj.add) {
        addMovie({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.listMovie) {
        listMovies();
    } else {
        console.log("Incorrect Command")
    }
} 

app(yargs.argv)