export enum piggemonType {
    yorkshire,
    lean,
    potbelly,
}

export abstract class Piggemon {
    id: number = 0;
    name: string;
    height: number;
    weight: number;
    constructor(id: number, name: string, height: number, weight: number) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

export class Yorkshire extends Piggemon {
    pType: piggemonType;
    ability1: number;
    ability2: number;
    overall: number;
    constructor(
        id: number,
        name: string,
        height: number,
        weight: number,
        ability1: number,
        ability2: number
    ) {
        super(id, name, height, weight);
        this.pType = piggemonType.yorkshire;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.overall = (height + weight + ability1 + ability2) / 4;
    }
}

export class Lean extends Piggemon {
    pType: piggemonType;
    ability1: number;
    ability2: number;
    overall: number;
    constructor(
        id: number,
        name: string,
        height: number,
        weight: number,
        ability1: number,
        ability2: number
    ) {
        super(id, name, height, weight);
        this.pType = piggemonType.lean;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.overall = (height + weight + ability1 + ability2) / 4;
    }
}

export class Potbelly extends Piggemon {
    pType: piggemonType;
    ability1: number;
    overall: number;
    constructor(
        id: number,
        name: string,
        height: number,
        weight: number,
        ability1: number
    ) {
        super(id, name, height, weight);
        this.pType = piggemonType.potbelly;
        this.ability1 = ability1;
        this.overall = (height + weight + ability1) / 3;
    }
}
