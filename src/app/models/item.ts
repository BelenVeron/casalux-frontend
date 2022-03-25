import { Kitchen } from "./kitchen";

export class Item {

    id: number;
    name: string;
    description: string;
    image: string;
    kitchens: Kitchen[];

    constructor(
        id: number,
        name: string,
        description: string,
        image: string,
        kitchens: Kitchen[],
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.kitchens = kitchens;
    }

}
