const axios = require('axios')

const defaultOptions = {
    timeout: 1000
};



const gets = async (ip, options) => {
    try {
        const result = await axios.get('https://cdn.rage.mp/master/', options)

        const servers = result.data
        return await findserver(servers, ip)
    } catch (error) {
        throw error
    }
}

const findserver = async (result, ip) => {

    try {
        const server = result[ip]
        if (server) {
            server.online = true;
            return server;
        }
        else
            throw new Error('server is Offline or Not Found Server :(')
    } catch (error) {
        throw error
    }
}






class rage {



    constructor(ip, options) {
        if (!ip)
            throw Error('Please provide an IP. XD');

        this.ip = ip;
        this.options = Object.assign(defaultOptions, options)
        this.server = gets(this.ip, this.options)

    }


    async getAllInfo() {
        try {
            const result = await this.server
            result.ip = this.ip;
            return result;

        } catch (error) {
            throw error
        }
    }

    async getName() {
        try {
            const result = await this.server
            return result.name;

        } catch (error) {
            throw error
        }
    }

    async getPlayers() {
        try {
            const server = await this.server;
            return server.players
        } catch (error) {
            throw error
        }
    }

    async getMaxplayers() {
        try {
            const server = await this.server;
            return server.maxplayers
        } catch (error) {
            throw Error(error)
        }
    }
    async getPeak() {
        try {
            const server = await this.server;
            return server.peak
        } catch (error) {
            throw error
        }
    }

    async getUrl() {
        try {
            const server = await this.server
            return server.url
        } catch (error) {
            throw error
        }
    }

    async getGameMod() {
        try {
            const server = await this.server
            return server.gamemode
        } catch (error) {
            throw error
        }
    }

    async getLang() {
        try {
            const server = await this.server
            return server.lang
        } catch (error) {
            throw error
        }
    }






}





module.exports = rage