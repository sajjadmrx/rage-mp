import axios from 'axios'
import { IOptions } from '../interfaces/options.interface';
import { IServer } from '../interfaces/server.interface';

axios.defaults.baseURL = 'https://cdn.rage.mp/master'

export class ApiService {
    static async getAllServers(options: IOptions): Promise<IServer[]> {
        try {
            const response = await axios.get('/', options)
            const objectServers = response.data
            const arrayServers: IServer[] = Object.keys(objectServers).map(key => {
                const server = objectServers[key]
                server.ip = key
                return server
            })

            return arrayServers
        } catch (error) {
            throw error
        }
    }
}
