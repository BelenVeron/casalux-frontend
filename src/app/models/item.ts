import { Content } from "./content";
import { Kitchen } from "./kitchen";

export class Item {

    id: string;
    name: string;
    description: string;
    image: string;
    kitchens: Kitchen[];
    contents: Content[];

    constructor(
        id: string,
        name: string,
        description: string,
        image: string,
        kitchens: Kitchen[],
        contents: Content[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.kitchens = kitchens;
        this.contents = contents;
    }

}
