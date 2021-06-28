const Lyrics = require('../src/LyricsFetcher');
const lyrics = new Lyrics();

/**
 * Example of the method getLyrics
 */
lyrics.getLyrics('Into the thick of it')
    .then((response) => {
        return console.log(response);
    })
    .catch((error) => {
        return console.log(error);
    })