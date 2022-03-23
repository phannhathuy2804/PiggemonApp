import { PiggemonServices } from "./PiggemonController";
import { Yorkshire, Lean, Potbelly, Piggemon } from "./PiggemonModels";

let typeTable = document.querySelector("#pType");
console.log(typeTable);
let tableBody = document.querySelector("#table-body");
let addbtn = document.querySelector("#add-btn");

let pServices: PiggemonServices = new PiggemonServices();

document.querySelector("body")?.addEventListener("load", function () {
    pServices = new PiggemonServices();
});

typeTable!.addEventListener("change", function (e: Event) {
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

    let p: Piggemon;
    switch (t) {
        case 0: {
            p = new Yorkshire(n, h, w, a1, a2);
            break;
        }
        case 1: {
            p = new Lean(n, h, w, a1, a2);
            break;
        }
        case 2: {
            p = new Potbelly(n, h, w, a1);
            break;
        }
        default: {
            p = new Yorkshire(n, h, w, a1, a2);
            break;
        }
    }
    pServices.addPig(p);
    window.location.href = "./index.html";
});

function populateMain() {
    console.log(localStorage.length);
}
