import { Direction } from "../enums";

export class Display {
  public floorNum: number = 0;
  public direction: Direction = Direction.IDLE;
  public capacity: number;

  constructor (capactity: number) {
    this.capacity = capactity
  }
}