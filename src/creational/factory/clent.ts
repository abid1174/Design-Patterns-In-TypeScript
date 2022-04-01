// Factory Use Case Example Code
import { ChairEnum } from "./chair-emun";
import ChairFactory from "./chair-factory";

const CHAIR = ChairFactory.getChair(ChairEnum.BIG);
console.log(CHAIR.getDimensions());
