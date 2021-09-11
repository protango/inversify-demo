export default interface IWeapon {
    name: string;
    damage: number;

    destroy(): void;
}