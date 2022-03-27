import { FavoritePhoto } from "./favorite-photo";

export class FavoriteKitchen {

    id: string;
    photos: FavoritePhoto[];

    constructor (id: string, photos: FavoritePhoto[]) {
        this.id = id;
        this.photos = photos;
    }

}
