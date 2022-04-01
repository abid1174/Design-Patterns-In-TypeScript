import SmallChair from "./small-chair";
import MediumChair from "./medium-chair";
import BigChair from "./big-chair";
import IChair from "./chair";
import { ChairEnum } from "./chair-emun";

export default class ChairFactory {
  static getChair(chair: string): IChair {
    if (chair == ChairEnum.BIG) {
      return new BigChair();
    } else if (chair == ChairEnum.MEDIUM) {
      return new MediumChair();
    } else {
      return new SmallChair();
    }
  }
}
