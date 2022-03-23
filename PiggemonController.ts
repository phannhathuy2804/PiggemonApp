import {
    Potbelly,
    Lean,
    Yorkshire,
    piggemonType,
    Piggemon,
} from "./PiggemonModels";

interface piggemonServices {
    addPig(p: Piggemon): void;
    getPig(id: number): Piggemon;
}

export class PiggemonServices implements piggemonServices {
    piggemonList: Piggemon[];
    static currentID: number = 0;
    constructor() {
        this.piggemonList = [];
        this.retrieveAllPigs();
    }

    addPig(p: Piggemon): void {
        p.id = PiggemonServices.currentID;
        PiggemonServices.currentID++;
        this.piggemonList.push(p);
        localStorage.setItem(p.id.toString(), JSON.stringify(p));
        window.alert("Successfully added a new Piggemon!");
    }

    getPig(id: number): Piggemon {
        return this.piggemonList[id];
    }

    deletePig(p: Piggemon): void {
        this.piggemonList.splice(p.id, 1);
        localStorage.removeItem(p.id.toString());
    }

    retrieveAllPigs(): void {
        PiggemonServices.currentID = localStorage.length;
        console.log(PiggemonServices.currentID);

        for (let i: number = 0; i < localStorage.length; i++) {
            let key: string | null = localStorage.key(i);
            if (key != null) {
                var value = JSON.parse(localStorage[key]);
                console.log(value);
                console.log(typeof value);
            }
        }
    }
}
