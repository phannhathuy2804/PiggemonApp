import {
    Potbelly,
    Lean,
    Yorkshire,
    piggemonType,
    Piggemon,
} from "./PiggemonModels";

interface piggemonServices {
    addPig(p: Piggemon): void;
    getPig(id: number): Piggemon | null;
}

export class PiggemonServices implements piggemonServices {
    piggemonList: Piggemon[];
    static currentID: number = 0;
    constructor() {
        this.piggemonList = [];
        this.retrieveAllPigs();
    }

    addPig(p: Piggemon): void {
        this.piggemonList.push(p);
        localStorage.setItem(p.id.toString(), JSON.stringify(p));
        window.alert("Successfully added a new Piggemon!");
        console.log("current Id" + PiggemonServices.currentID);
    }

    getPig(id: number): Yorkshire | null {
        let stringID: string = id.toString();
        console.log("string key: " + stringID);
        let pig: Yorkshire;
        let stringValue: string | null = localStorage.getItem(stringID);
        console.log("string value: " + stringValue);
        if (stringValue != null) {
            pig = JSON.parse(stringValue);
            return pig;
        }
        return null;
    }

    deletePig(pid: number): void {
        this.piggemonList.splice(pid, 1);
        console.log("Removing" + pid);
        localStorage.removeItem(pid.toString());
    }

    retrieveAllPigs(): void {
        let Arr: number[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key: string | null = localStorage.key(i);
            if (key != null) {
                Arr.push(parseInt(key));
            }
        }
        let maxID: number;
        maxID = Math.max.apply(null, Arr);
        if (localStorage.length == 0) {
            maxID = 0;
        }
        if (maxID != null) {
            PiggemonServices.currentID = maxID + 1;
            console.log(PiggemonServices.currentID);
            for (let i: number = 0; i < localStorage.length; i++) {
                let key: string | null = localStorage.key(i);
                if (key != null) {
                    var value = JSON.parse(localStorage[key]);
                }
            }
        }
    }
}
