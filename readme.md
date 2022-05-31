


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
const RageMp = require("rage-mp").default;


(async () => {
    const rageMp = new RageMp({})
    const server = await rageMp.getSingleServer("ip:port");
    console.log(server) // server result
})();
```



## ⚡**ALL METHODS**
- getServers - get all servers 
- getSingleServer - get single server with ip:port
- getServersByGamemode - get all servers by gamemode
- getServersByLang - get all servers by lang
 
## 🪂**EXAMPLES**

#### ``getServers``
```js
const RageMp = require("rage-mp").default;
(async () => {
    const rageMp = new RageMp({})
    const servers = await rageMp.getServers()
    console.log(servers) // servers array
})();
```

#### ``getSingleServer``
```js
const RageMp = require("rage-mp").default;
(async () => {
    const rageMp = new RageMp({})
    const result = await rageMp.getSingleServer("rage2.gta5grand.com:22005")
    console.log(result) // server info
})();
```

#### ``getServersByGamemode``
```js
const RageMp = require("rage-mp").default;
(async () => {
    const rageMp = new RageMp({})
    const result = await rageMp.getServersByGamemode("rp")
    console.log(result) // server info
})();
```

#### ``getServersByLang``
```js
const RageMp = require("rage-mp").default;
(async () => {
    const rageMp = new RageMp({})
    const result = await rageMp.getServersByLang("en")
    console.log(result) // server info
})();
```

## 📝 TODO
- add more methods
- better docs
