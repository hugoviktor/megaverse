import {Astral} from "./astral.js";

export class Soloon extends Astral{
    color: string;
    constructor(row: number, column: number, color: string) {
        super(row, column);
        this.color = color;
    }
}