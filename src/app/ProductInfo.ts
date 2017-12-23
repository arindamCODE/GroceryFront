export class ProductInfo {
    id: number;
    groupID: number;
    name: string;
    description: string;
    rate: number;

    constructor(id: number, groupID: number, name: string, description: string, rate: number) {
        this.id = id;
        this.groupID = groupID;
        this.name = name;
        this.description = description;
        this.rate = rate;
    }

}