#!/usr/bin/env npx --package=ts-node  -- ts-node-esm
import {Megaverse} from "./domain/megaverse.js";
import 'zx/globals'
import {MegaverseHttpClient} from "./http/megaverse-http-client.js";
import {argv} from "zx";

let megaverse = new Megaverse(new MegaverseHttpClient("https://challenge.crossmint.io/api",
    "b0cda8af-d895-4c52-a9a9-6559a2380e80"));

await megaverse.fill();

