# lyrics-monarch-api
Fetches lyrics of a song using matching terms.

## Methods
```javascript
getLyrics(term)
```
## For Javascript:
```Javascript
const Lyrics = require('lyrics-monarch-api');
const lyrics = new Lyrics();
/**
 * Example of the method getLyrics
 */
lyrics.getLyrics('Snap back to reality')
    .then((response) => {
        return console.log(response);
    })
    .catch((error) => {
        return console.log(error);
    })
```

## For Typescript
```Typescript
// @ts-ignore
import Lyrics from 'lyrics-monarch-api';
const lyrics = new Lyrics();
/**
 * Example of the method getLyrics
 */
lyrics.getLyrics('Snap back to reality')
    .then((response) => {
        return console.log(response);
    })
    .catch((error) => {
        return console.log(error);
    })
```