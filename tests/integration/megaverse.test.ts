import {Megaverse} from "../../src/domain/megaverse.js";
import {MegaverseHttpClient} from "../../src/http/megaverse-http-client.js";
describe("Test filling megaverse", () => {
    it("Should invoke correct endpoints", async () => {

        let ins = new MegaverseHttpClient("", "");

        jest.spyOn(ins, "getGoalMap")
            // @ts-ignore
            .mockImplementation(() => Promise.resolve({

                goal: [
                    ["POLYANET", "SPACE", "WHITE_SOLOON"],
                    ["SPACE", "POLYANET", "SPACE"],
                    ["SPACE", "SPACE", "POLYANET"]
                ]
            }))

        jest.spyOn(ins, "putPolyanet")
            .mockImplementation(() => Promise.resolve({} as any))

        jest.spyOn(ins, "putSoloon")
            .mockImplementation(() => Promise.resolve({} as any))
        jest.spyOn(ins, "putCometh")
            .mockImplementation(() => Promise.resolve({} as any))

        let mega = new Megaverse(ins);
        await mega.fill();
        // @ts-ignore
        expect(ins.putPolyanet).toHaveBeenCalledTimes(3);
        expect(ins.putSoloon).toHaveBeenCalledTimes(1);
        expect(ins.putCometh).toHaveBeenCalledTimes(0);
    })
})