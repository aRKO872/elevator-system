import { ElevatorCar } from "./elevator_car";
import { Floor } from "./floor";

export class Building {
  public floors: Floor[]
  public elevatorCars: ElevatorCar[]

  constructor (floors: Floor[], elevatorCars: ElevatorCar[]) {
    this.floors = floors;
    this.elevatorCars = elevatorCars;
  }
}