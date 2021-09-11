import { inject, injectable } from "inversify";
import { INJECTION_KEYS } from "../injectionKeys";
import IWeapon from "./IWeapon";

@injectable()
export class Sword implements IWeapon {
    name: string;
    damage: number;
    destroy(): void {
        console.log("Sword broke :(");
        this.damage = 0;
    }

    constructor() {
        this.name = "Sword";
        this.damage = 100;
    }
}