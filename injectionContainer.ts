import { Container } from "inversify";
import { INJECTION_KEYS } from "./injectionKeys";
import Player from "./Player/Player";
import IWeapon from "./Weapon/IWeapon";
import { Laser } from "./Weapon/Laser";

export const container = new Container();
container.bind<IWeapon>(INJECTION_KEYS.Weapon).to(Laser);
container.bind(Player).to(Player);