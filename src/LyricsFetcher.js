const axios = require('axios');

class Lyrics { 
    
    /**
     * Looks for the data about a song.
     * @public
     * @param {string} name A song's name.
     */
    async getLyrics(term) {
        const lyrics = await axios.get('https://scrap.terhambar.com/lirik',{params:{word:term}})
        .catch((error) => {
            console.log(error)
        })
        return lyrics;
    }

}

module.exports = Lyrics;
