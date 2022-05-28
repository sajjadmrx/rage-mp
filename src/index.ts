import { IOptions } from './interfaces/options.interface';
import { IServer } from './interfaces/server.interface';
import { ApiService } from './services/api.service';


class RageMP {

    constructor(private options: IOptions) { }

    public async getServers(): Promise<IServer[]> {
        try {
            const servers = ApiService.getAllServers(this.options)
            return servers // promise
        } catch (error) {
            throw error
        }
    }


    public async getSingleServer(ip: string): Promise<IServer | undefined> {
        try {
            const servers = await this.getServers();
            return servers.find(server => server.ip === ip)
        } catch (error) {
            throw error
        }
    }

    public async getServersByGamemode(gamemode: string): Promise<IServer[]> {
        try {
            const servers = await this.getServers();
            return servers.filter(server => server.gamemode == gamemode)
        } catch (error) {
            throw error
        }
    }

    public async getServersByLang(lang: string): Promise<IServer[]> {
        try {
            const servers = await this.getServers();
            return servers.filter(server => server.lang == lang)
        } catch (error) {
            throw error
        }
    }


}

export default RageMP