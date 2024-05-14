import { Display } from "./display";
import { HallPanel } from "./panel";

export class Floor {
  public floorNum: number;
  public calledElevator: boolean;
  public panels: HallPanel[];
  public displays: Display[];

  constructor (floorNum: number, panels: HallPanel[], displays: Display[]) {
    this.calledElevator = false;
    this.floorNum = floorNum;
    this.panels = panels;
    this.displays = displays;
  }
  
  public CallForElevator () {
    this.calledElevator = true;
  }
}