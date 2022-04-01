"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chair_1 = require("./chair");
class BigChair extends chair_1.default {
    constructor() {
        super();
        this.height = 80;
        this.width = 80;
        this.depth = 80;
    }
}
exports.default = BigChair;
