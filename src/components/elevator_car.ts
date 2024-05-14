import { Direction } from "../enums";
import { Display } from "./display";
import { Door } from "./door";
import { ElevatorPanel } from "./panel";

export class ElevatorCar {
  public id: number
  public panel: ElevatorPanel
  public door: Door
  public display: Display
  public currentFloor: number
  public elevatorState: Direction

  constructor (id: number, panel: ElevatorPanel, door: Door, display: Display) {
    this.id = id;
    this.panel = panel;
    this.display = display;
    this.door = door;
    this.currentFloor = 0;
    this.elevatorState = Direction.IDLE
  }

  public Move () {
    // Elevator Moving Logic
  }

  public Stop() {
    // Elevator Stopping Logic
  }

  public OpenDoor() {
    if (this.elevatorState === Direction.IDLE && !this.door.IsOpen()) this.door.Open();
  }

  public CloseDoor () {
    if (this.elevatorState === Direction.IDLE && this.door.IsOpen()) this.door.Close();
  }
}