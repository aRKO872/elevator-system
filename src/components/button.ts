import { Direction } from "../enums";

abstract class Button {
  abstract isPressed : boolean;

  abstract Press () : void 
  abstract IsPressed () : boolean 
}

export class HallButton extends Button {
  public isPressed: boolean;
  private direction: Direction;

  constructor (dir : Direction) {
    super()
    this.isPressed = false
    this.direction = dir
  }

  public Press () : void {
    this.isPressed = true
  }

  public IsPressed () : boolean {
    return this.isPressed
  }

  public GetDirection () : Direction {
    return this.direction
  }
}

export class ElevatorButton extends Button {
  public isPressed: boolean;
  private floorBtnNum: number;

  constructor (floorNum: number) {
    super()
    this.isPressed = false
    this.floorBtnNum = floorNum
  }

  public Press () : void {
    this.isPressed = true
  }

  public IsPressed () : boolean {
    return this.isPressed
  }

  public GetFloorButtonNumber (): number {
    return this.floorBtnNum
  }
}