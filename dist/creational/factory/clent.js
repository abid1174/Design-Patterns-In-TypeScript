"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Factory Use Case Example Code
const chair_emun_1 = require("./chair-emun");
const chair_factory_1 = require("./chair-factory");
const CHAIR = chair_factory_1.default.getChair(chair_emun_1.ChairEnum.BIG);
console.log(CHAIR.getDimensions());
