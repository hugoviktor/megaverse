import {MegaverseHttpClient} from "../../src/http/megaverse-http-client.js";

describe('polyanet integration test', () => {
    jest.setTimeout(50000)

    afterAll(async () => {
        let client = new MegaverseHttpClient("https://challenge.crossmint.io/api", "b0cda8af-d895-4c52-a9a9-6559a2380e80");
        await client.deletePolyanet(0, 0);
    })
    describe("Add polyanet",() => {
        it("Should create a polyanet", async () => {
            let client = new MegaverseHttpClient("https://challenge.crossmint.io/api", "b0cda8af-d895-4c52-a9a9-6559a2380e80");
            await client.putPolyanet(0, 0);
            let map = await client.getMap();
            let pos = map["map"]["content"][0][0]
            expect(pos.type).toBe(0);
        })
    })

})