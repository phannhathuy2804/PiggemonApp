import { PiggemonServices } from "./PiggemonController";
import {
    Yorkshire,
    Lean,
    Potbelly,
    Piggemon,
    piggemonType,
} from "./PiggemonModels";
let pServices: PiggemonServices = new PiggemonServices();
let moreInfoID: number = 1;
let typeTable = document.querySelector("#pType");
let tableBody = document.querySelector("#table-body");
let addbtn = document.querySelector("#add-btn");
let mainTableBody = document.querySelector("#main-table-body");
updateDataFromLocalStorage(pServices);
populateInfoTable();

function updateDataFromLocalStorage(pServices: PiggemonServices) {
    pServices.retrieveAllPigs();
    let name = document.querySelector("#infoName");
    console.log(name);
    let piggemonObj: { id: number; name: string; pType: piggemonType } = {
        id: 0,
        name: "",
        pType: piggemonType.yorkshire,
    };
    console.log("current Id" + PiggemonServices.currentID);

    for (let i: number = 0; i < localStorage.length; i++) {
        let type: string = "";
        let key = localStorage.key(i);
        if (key != null) {
            let piggemon = localStorage.getItem(key);

            if (piggemon != null) {
                piggemonObj = JSON.parse(piggemon);
                console.log(piggemonObj.pType);
                if (piggemonObj.pType == 0) {
                    type = "Yorkshire";
                } else if (piggemonObj.pType == 1) {
                    type = "Lean";
                } else {
                    type = "Pottbelly";
                }
            }
        }
        mainTableBody?.insertAdjacentHTML(
            "beforeend",
            `<tr class="pEntry" id="entry_${piggemonObj.name}"><td>${piggemonObj.name}</td><td>${type}</td><td><a href="#" id="delete_${piggemonObj.name}">Delete</a></td><td><a href="#" id="info_${piggemonObj.name}">More Info</a></td></tr>`
        );
        let id: number = piggemonObj.id;
        console.log(id + piggemonObj.name);
        document
            .querySelector(`#delete_${piggemonObj.name}`)
            ?.addEventListener("click", function (e: Event) {
                console.log(id);
                pServices.deletePig(id);
                alert("Succesfully deleted a pig");
                location.reload();
            });
        document
            .querySelector(`#info_${piggemonObj.name}`)
            ?.addEventListener("click", function () {
                let pig: Piggemon | null = pServices.getPig(id);

                console.log(pig);
                if (pig != null) {
                    moreInfoID = pig.id;
                    window.location.href = "./detail.html";
                }
                populateInfoTable();
            });
    }
}

typeTable?.addEventListener("change", function (e: Event) {
    if (e.target != null) {
        if ((<HTMLSelectElement>e.target).value == "0") {
            if (tableBody != null) {
                document
                    .querySelectorAll(".ability")
                    .forEach((e) => e.remove());
                tableBody.insertAdjacentHTML(
                    "beforeend",
                    ' <tr class="ability"><th scope="row"><b>Water Ability</b></th><th><input type="number" name="wAbility" id="Ability1" class="ability1"/></th></tr>'
                );
                tableBody.insertAdjacentHTML(
                    "beforeend",
                    ' <tr  class="ability"><th scope="row"><b>Ice Ability</b></th><th><input type="number" name="iAbility" id="Ability2"  class="ability2"/></th></tr>'
                );
            }
        } else if ((<HTMLSelectElement>e.target).value == "1") {
            if (tableBody != null) {
                document
                    .querySelectorAll(".ability")
                    .forEach((e) => e.remove());
                tableBody.insertAdjacentHTML(
                    "beforeend",
                    ' <tr  class="ability"><th scope="row"><b>Fire Ability</b></th><th><input type="number" name="fAbility" id="Ability1" class="ability1"/></th></tr>'
                );
                tableBody.insertAdjacentHTML(
                    "beforeend",
                    ' <tr  class="ability"><th scope="row"><b>Charm Ability</b></th><th><input type="number" name="cAbility" id="Ability2" class="ability2"/></th></tr>'
                );
            }
        } else {
            if (tableBody != null) {
                document
                    .querySelectorAll(".ability")
                    .forEach((e) => e.remove());
                tableBody.insertAdjacentHTML(
                    "beforeend",
                    ' <tr  class="ability"><th scope="row"><b>Electricity Ability</b></th><th><input type="number" name="eAbility" id="Ability1" class="ability1"/></th></tr>'
                );
            }
        }
    }
});

addbtn?.addEventListener("click", function (e: Event) {
    let n = (<HTMLInputElement>document.querySelector("#pName")).value;
    let h = parseInt(
        (<HTMLInputElement>document.querySelector("#pHeight")).value
    );
    let w = parseInt(
        (<HTMLInputElement>document.querySelector("#pWeight")).value
    );
    let t = parseInt(
        (<HTMLInputElement>document.querySelector("#pType")).value
    );
    let a1 = parseInt(
        (<HTMLInputElement>document.querySelector(".ability1")).value
    );
    let optional_a2 = <HTMLInputElement>document.querySelector(".ability2");
    let a2: number;
    if (optional_a2 != null) {
        a2 = parseInt(optional_a2.value);
    } else {
        a2 = 0;
    }
    let id: number = PiggemonServices.currentID;
    let p: Piggemon;
    switch (t) {
        case 0: {
            p = new Yorkshire(id, n, h, w, a1, a2);
            break;
        }
        case 1: {
            p = new Lean(id, n, h, w, a1, a2);
            break;
        }
        case 2: {
            p = new Potbelly(id, n, h, w, a1);
            break;
        }
        default: {
            p = new Yorkshire(id, n, h, w, a1, a2);
            break;
        }
    }
    PiggemonServices.currentID++;
    pServices.addPig(p);
    window.location.href = "./index.html";
    updateDataFromLocalStorage(pServices);
});

function populateInfoTable(): void {
    let pig: Yorkshire | null = pServices.getPig(moreInfoID);
    console.log("Pig? " + pig);

    if (pig != null) {
        let type: string = "";
        if (pig.pType == 0) {
            type = "Yorkshire";
        } else if (pig.pType == 1) {
            type = "Lean";
        } else {
            type = "Pottbelly";
        }
        document
            .querySelector("#infoName")
            ?.insertAdjacentHTML("beforeend", `${pig.name}`);
        document
            .querySelector("#infoType")
            ?.insertAdjacentHTML("beforeend", `${type}`);
        document
            .querySelector("#infoWeight")
            ?.insertAdjacentHTML("beforeend", `${pig.weight}`);
        document
            .querySelector("#infoHeight")
            ?.insertAdjacentHTML("beforeend", `${pig.height}`);
        document
            .querySelector("#infoAbility1")
            ?.insertAdjacentHTML("beforeend", `${pig.ability1}`);
        document
            .querySelector("#infoAbility2")
            ?.insertAdjacentHTML("beforeend", `${pig.ability2}`);
        document
            .querySelector("#infoOverall")
            ?.insertAdjacentHTML("beforeend", `${pig.overall}`);
    }
}
