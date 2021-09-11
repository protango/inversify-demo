import { inject, injectable } from "inversify";
import { INJECTION_KEYS } from "../injectionKeys";
import IWeapon from "../Weapon/IWeapon";

@injectable()
export default class Player {
    public weapon: IWeapon;

    constructor(
        @inject(INJECTION_KEYS.Weapon) weapon: IWeapon
    ) {
        this.weapon = weapon;
    }

    public getWeaponName(): string {
        return this.weapon.name;
    }
}