import * as ASTRALS from "../../utils/megaverse-elements.js";
import {Soloon} from "../models/soloon.js";
import {Cometh} from "../models/cometh.js";
import {Polyanet} from "../models/polyanet.js";
import {Space} from "../models/space.js";
import {Astral} from "../models/astral.js";

export class AstralFactory {

    public buildAstral(str: string, row: number, col: number): Astral {
        const regex = /([a-zA-Z]*)_([a-zA-Z]*)|POLYANET|SPACE/gm;
        let m = regex.exec(str);
        if (m[1]) {
            let astral = m[2];
            let prop = m[1];
            switch (astral) {
                case ASTRALS.SOLOON:
                    return this.buildSaloon(row, col, prop);
                case ASTRALS.COMETH:
                    return this.buildCometh(row, col, prop);
            }
        } else {
            //is SPACE or POLYANET
            switch (m[0]) {
                case ASTRALS.POLYANET:
                    return this.buildPolyanet(row, col);
                case ASTRALS.SPACE:
                    return this.buildSpace(row, col);

            }
        }
    }

    public buildSpace(row: number, column: number): Space {
        return new Space(row, column)
    }

    public buildPolyanet(row: number, column: number): Polyanet {
        return new Polyanet(row, column);
    }

    public buildSaloon(row: number, col: number, color: string): Soloon {
        return new Soloon(
            row,
            col, color.toLowerCase()
        )
    }

    public buildCometh(row: number, col: number, direction: string): Cometh {
        return new Cometh(
            row,
            col,
            direction.toLowerCase()
        )
    }
}