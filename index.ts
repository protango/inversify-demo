import "reflect-metadata";
import { container } from "./injectionContainer";
import Player from "./Player/Player";

const player = container.get(Player);


console.log(player.getWeaponName());