import {AstralFactory} from "../../../src/domain/factory/astral-factory.js";
import {Astral} from "../../../src/domain/models/astral.js";
import {Soloon} from "../../../src/domain/models/soloon.js";
import {Cometh} from "../../../src/domain/models/cometh.js";
import {Space} from "../../../src/domain/models/space.js";
import {Polyanet} from "../../../src/domain/models/polyanet.js";

describe("Test Astral Factories", () => {
    it("Should create a Saloon", () => {
        let factory = new AstralFactory();
        let astral = factory.buildAstral("WHITE_SOLOON", 1, 1);
        expect(astral instanceof Astral).toBe(true);
        expect((astral as Soloon).color).toBe("white");
    })

    it("Should create a Cometh", () => {
        let factory = new AstralFactory();
        let astral = factory.buildAstral("RIGHT_COMETH", 1, 1);
        expect(astral instanceof Cometh).toBe(true);
        expect((astral as Cometh).direction).toBe("right");
    })

    it("Should create a Space", () => {
        let factory = new AstralFactory();
        let astral = factory.buildAstral("SPACE", 1, 1);
        expect(astral instanceof Space).toBe(true);
        expect((astral as Space).row).toBe(1);
        expect((astral as Space).column).toBe(1);
    })

    it("Should create a Polyanet", () => {
        let factory = new AstralFactory();
        let astral = factory.buildAstral("POLYANET", 1, 1);
        expect(astral instanceof Polyanet).toBe(true);
        expect((astral as Polyanet).row).toBe(1);
        expect((astral as Polyanet).column).toBe(1);
    })
})