


# RAGE MP

API for getting RAGE MP server info & status.
![Examples](https://cdn.discordapp.com/attachments/807678844252192768/849224975524298802/example.png)
## 📥 Installation 
```bash
npm i rage-mp
```
[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://www.npmjs.com/package/rage-mp)
## 🧷 import
> Javascript
```js
const RageMp = require("rage-mp").default;
```
> TypeScript
```ts
import { RageMp } from "rage-mp";
```

# ⚙️Usage
```js
const rageMp = new RageMp({timeout:1000})//option is optional

const server = await rageMp.getSingleServer("ip:port")
//result:
        // name: "server Name
        //     gamemode: "gangwar",
        //     url: "rage.mp",
        //     lang: "en",
        //     players: 10,
        //     peak: 1,
        //     maxplayers: 100,
        //     ip: "ip:port"
```



## ⚡**ALL METHODS**
- getServers - get all servers 
- getSingleServer - get single server with ip:port
- getServersByGamemode - get all servers by gamemode
- getServersByLang - get all servers by lang
 
## 🪂**EXAMPLES**
```js
const RageMp = require("rage-mp").default;
(async () => {
    const rageMp = new RageMp()
    const servers = await rageMp.getServers()
    console.log(servers) // servers array
})();
```

## 📝 TODO
- add more methods
- better docs
