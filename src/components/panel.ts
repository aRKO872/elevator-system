import { Direction } from "../enums";
import { ElevatorButton, HallButton } from "./button";

export class ElevatorPanel {
  public buttons: ElevatorButton[]
  public openButton: ElevatorButton
  public closeButton: ElevatorButton

  constructor (noOfFloors: number) {
    let btns : ElevatorButton[] = []

    for (let num = 0; num <= noOfFloors; num += 1) {
      const button = new ElevatorButton(num)
      btns.push (button)
    }

    this.buttons = btns
    this.openButton = new ElevatorButton(-1)
    this.closeButton = new ElevatorButton(-1)
  }
}

export class HallPanel {
  public upButton: HallButton
  public downButton: HallButton

  constructor() {
    this.upButton = new HallButton(Direction.UP)
    this.downButton = new HallButton(Direction.DOWN)
  }
}