import { injectable } from "inversify";
import IWeapon from "./IWeapon";

@injectable()
export class TestWeapon implements IWeapon {
    name: string;
    damage: number;
    destroy(): void {
        console.log("Test weapon broke :(");
        this.damage = 0;
    }

    constructor() {
        this.name = "TestWeapon";
        this.damage = 0;
    }
}