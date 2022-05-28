const RageMp = require('../../rage-mp').default
describe("servers", () => {
    let rageMp;
    beforeAll(() => {
        rageMp = new RageMp({ timeout: 1000 })
    })
    it("should return all servers", async () => {
        const servers = await rageMp.getServers()
        expect(servers).toBeDefined()
    })
    it("should return a single server", async () => {
        const server = {
            name: "Old Man's Club [1.1]",
            gamemode: "gangwar",
            url: "rage.mp",
            lang: "en",
            players: 0,
            peak: 1,
            maxplayers: 100,
            ip: "84.179.234.118:22005"
        }
        const fn = jest.fn()
        fn.mockResolvedValue(server)
        const getSingleServer = jest.spyOn(rageMp, 'getSingleServer')
        getSingleServer.mockImplementation(fn)
        const serverIp = server.ip
        const serverResponse = await rageMp.getSingleServer(serverIp)
        expect(serverResponse).toBeDefined()
    })

    it("should return undefined if server not found", async () => {
        const fn = jest.fn()
        fn.mockResolvedValue(undefined)
        const getSingleServer = jest.spyOn(rageMp, 'getSingleServer')
        getSingleServer.mockImplementation(fn)
        const serverIp = "841111.179.234.118:22005"
        const serverResponse = await rageMp.getSingleServer(serverIp)
        expect(serverResponse).toBeUndefined()
    })
})