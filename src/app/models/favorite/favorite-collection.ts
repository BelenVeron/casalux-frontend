import { FavoriteKitchen } from "./favorite-kitchen";

export class FavoriteCollection {

    id: string;
    kitchens: FavoriteKitchen[];

    constructor (id: string, kitchens: FavoriteKitchen[]) {
        this.id = id;
        this.kitchens = kitchens;
    }
}
