


# RAGE MP

API for getting RAGE MP server info & status.
![Examples](https://cdn.discordapp.com/attachments/807678844252192768/849224975524298802/example.png)
## Installation 
**Install Package**: npm i rage-mp
[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://www.npmjs.com/package/rage-mp)
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
