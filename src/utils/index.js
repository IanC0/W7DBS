const fs = require('fs');

const addMovie = (movieObj) => {
    try {
        const stringObj = JSON.stringify(movieObj) //this line is using a built in JS function to change the object to a string
        fs.writeFileSync('./storage.json', stringObj) // this is saying if storage.json doesn't exist create a file called storage.json and fill it with stringObj. Otherwise it would add stringObj to storage
    }
    catch (error) {
        console.log(error)
    }
};

const listMovies = () => {
    try {
        const jsonList = fs.readFileSync('./storage.json') //reads data we have saved in the file
        const listParser = JSON.parse(jsonList)
        console.log(listParser);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {addMovie, listMovies}
