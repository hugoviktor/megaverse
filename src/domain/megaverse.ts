import {MegaverseHttpClient} from "../http/megaverse-http-client.js";
import {AstralFactory} from "./factory/astral-factory.js";
import * as ASTRALS from "../utils/megaverse-elements.js";
import {Soloon} from "./models/soloon.js";
import {Cometh} from "./models/cometh.js";
import {Space} from "./models/space.js";

export class Megaverse {
    private client: MegaverseHttpClient;

    constructor(http_client: MegaverseHttpClient) {
        this.client = http_client;
    }

    public async clearMap(nRow: number, nCols: number) {
        for (let i = 0; i < nRow; i++) {
            for (let j = 0; j < nCols; j++) {
                await this.client.deletePolyanet(i, j);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }

    public async fill() {
        let goal = await this.client.getGoalMap();
        let map = goal["goal"];
        let factory = new AstralFactory();
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                let val = map[i][j];
                let astral = factory.buildAstral(val, i, j);
                switch (astral.constructor.name.toUpperCase()) {
                    case ASTRALS.SOLOON:
                        await this.client.putSoloon(astral as Soloon);
                        break;
                    case ASTRALS.POLYANET:
                        await this.client.putPolyanet(i, j);
                        break;
                    case ASTRALS.COMETH:
                        await this.client.putCometh(astral as Cometh);
                        break;
                }
                if (!(astral instanceof Space)) {
                    await new Promise(resolve => setTimeout(resolve, 500))
                }
            }
        }
    }
}