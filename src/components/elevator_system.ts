import { Building } from "./building";
import { Display } from "./display";
import { Door } from "./door";
import { ElevatorCar } from "./elevator_car";
import { Floor } from "./floor";
import { ElevatorPanel, HallPanel } from "./panel";

export class ElevatorSystem {
  public building: Building

  private constructor(building: Building) {
    this.building = building;
  }

  private elevatorSystem: ElevatorSystem | null = null;

  private GenerateBuildingInfo(): Building {
    const floors: Floor[] = [];
    const elevatorCars: ElevatorCar[] = [];

    // Let's have 6 floors
    for (let i = 0; i <= 6; i++) {
      // lets have 3 elevator cars, so 3 panels and displays
      const panels: HallPanel[] = []
      const displays: Display[] = []

      for (let i = 0; i < 3; i++) {
        panels.push(new HallPanel());
        displays.push(new Display(6));
      }

      floors.push(new Floor(i, panels, displays));
    }

    // Let's have 2 Elevator Cars 
    for (let i = 0; i < 2; i++) {
      elevatorCars.push(new ElevatorCar(i, new ElevatorPanel(6), new Door(), new Display(6)))
    }

    return new Building(floors, elevatorCars)
  }

  public GetInstance(): ElevatorSystem {
    if (this.elevatorSystem != null) return this.elevatorSystem
    else {
      const building = this.GenerateBuildingInfo()

      this.elevatorSystem = new ElevatorSystem(building);
      return this.elevatorSystem;
    }
  }
}