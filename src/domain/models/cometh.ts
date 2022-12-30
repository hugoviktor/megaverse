import {Astral} from "./astral.js";

export class Cometh extends Astral{
    direction: string;

    constructor(row: number, column: number, direction: string) {
        super(row, column);
        this.direction = direction;
    }
}