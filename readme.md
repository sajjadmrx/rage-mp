# RAGE MP

API for getting RAGE MP server info & status.

## Installation 
**Install Package**: npm i rage-mp

## Usage
**Examples**

See if server is online (json)
```js
const Rage = require("rage-mp") // Import the npm package.
const srv = new Rage.Server('IP:PORT',{}) // Set the IP with port.
 
srv.getAllInfo().then(data => console.log(data)) // Get & log the data!

//if online returns json data
// if offline,returns error
```

Get Player Count (in numbers)
```js
const Rage = require("rage-mp") // Import the npm package.
const srv = new Rage.Server('IP:PORT',{}) // Set the IP with port.
 
srv.getPlayers().then(data => console.log(data)) // Get & log the data!
```


## **ALL FUNCTION REQUESTS**
- getAllInfo - Get the whole server  - (object)
- getName - Get the name of the server - (string)
- getPlayers - Number of players online - (number)
- getMaxPlayers - Max players that are able to join the server - (number)
- getPeak - Get the peak of the server
- url - Get the web url of the server - (string)
- getGameMod - Get the game mode of the server - (string)
- getLang - The language of the server - (string)
