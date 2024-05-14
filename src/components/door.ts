import { DoorState } from "../enums";

export class Door {
  private doorState : DoorState = DoorState.CLOSE

  public Open () {
    this.doorState = DoorState.OPEN;
  }

  public Close () {
    this.doorState = DoorState.CLOSE;
  }

  public IsOpen () : boolean {
    return (this.doorState === DoorState.OPEN)
  }
}