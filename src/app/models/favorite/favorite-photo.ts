export class FavoritePhoto {

    id: string;
    favorite: boolean;

    constructor (id: string, favorite: boolean) {
        this.id = id;
        this.favorite = favorite;
    }
}
