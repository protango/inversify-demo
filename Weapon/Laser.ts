import { injectable } from "inversify";
import IWeapon from "./IWeapon";

@injectable()
export class Laser implements IWeapon {
    name: string;
    damage: number;
    destroy(): void {
        console.log("Laser broke :(");
        this.damage = 0;
    }

    shoot(): void {
        console.log("Firing my laser!");
    }

    constructor() {
        this.name = "Laser";
        this.damage = 250;
    }
}