export enum piggemonType {
    yorkshire,
    lean,
    potbelly,
}

abstract class Piggemon {
    name: string;
    height: number;
    weight: number;
    constructor(name: string, height: number, weight: number) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

export class Yorkshire extends Piggemon {
    pType: piggemonType;
    waterAbility: number;
    iceAbility: number;
    overall: number;
    constructor(
        name: string,
        height: number,
        weight: number,
        waterAbility: number,
        iceAbility: number
    ) {
        super(name, height, weight);
        this.pType = piggemonType.yorkshire;
        this.waterAbility = waterAbility;
        this.iceAbility = iceAbility;
        this.overall = (height + weight + waterAbility + iceAbility) / 4;
    }
}

export class Lean extends Piggemon {
    pType: piggemonType;
    fireAbility: number;
    charmAbility: number;
    overall: number;
    constructor(
        name: string,
        height: number,
        weight: number,
        fireAbility: number,
        charmAbility: number
    ) {
        super(name, height, weight);
        this.pType = piggemonType.lean;
        this.fireAbility = fireAbility;
        this.charmAbility = charmAbility;
        this.overall = (height + weight + fireAbility + charmAbility) / 4;
    }
}
