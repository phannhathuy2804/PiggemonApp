System.register(["./PiggemonController", "./PiggemonModels"], function (exports_1, context_1) {
    "use strict";
    var PiggemonController_1, PiggemonModels_1, pServices, moreInfoID, typeTable, tableBody, addbtn, mainTableBody;
    var __moduleName = context_1 && context_1.id;
    function updateDataFromLocalStorage(pServices) {
        var _a, _b;
        pServices.retrieveAllPigs();
        let name = document.querySelector("#infoName");
        console.log(name);
        let piggemonObj = {
            id: 0,
            name: "",
            pType: PiggemonModels_1.piggemonType.yorkshire,
        };
        console.log("current Id" + PiggemonController_1.PiggemonServices.currentID);
        for (let i = 0; i < localStorage.length; i++) {
            let type = "";
            let key = localStorage.key(i);
            if (key != null) {
                let piggemon = localStorage.getItem(key);
                if (piggemon != null) {
                    piggemonObj = JSON.parse(piggemon);
                    console.log(piggemonObj.pType);
                    if (piggemonObj.pType == 0) {
                        type = "Yorkshire";
                    }
                    else if (piggemonObj.pType == 1) {
                        type = "Lean";
                    }
                    else {
                        type = "Pottbelly";
                    }
                }
            }
            mainTableBody === null || mainTableBody === void 0 ? void 0 : mainTableBody.insertAdjacentHTML("beforeend", `<tr class="pEntry" id="entry_${piggemonObj.name}"><td>${piggemonObj.name}</td><td>${type}</td><td><a href="#" id="delete_${piggemonObj.name}">Delete</a></td><td><a href="#" id="info_${piggemonObj.name}">More Info</a></td></tr>`);
            let id = piggemonObj.id;
            console.log(id + piggemonObj.name);
            (_a = document
                .querySelector(`#delete_${piggemonObj.name}`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
                console.log(id);
                pServices.deletePig(id);
                alert("Succesfully deleted a pig");
                location.reload();
            });
            (_b = document
                .querySelector(`#info_${piggemonObj.name}`)) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
                let pig = pServices.getPig(id);
                console.log(pig);
                if (pig != null) {
                    moreInfoID = pig.id;
                    window.location.href = "./detail.html";
                }
                populateInfoTable();
            });
        }
    }
    function populateInfoTable() {
        var _a, _b, _c, _d, _e, _f, _g;
        let pig = pServices.getPig(moreInfoID);
        console.log("Pig? " + pig);
        if (pig != null) {
            let type = "";
            if (pig.pType == 0) {
                type = "Yorkshire";
            }
            else if (pig.pType == 1) {
                type = "Lean";
            }
            else {
                type = "Pottbelly";
            }
            (_a = document
                .querySelector("#infoName")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("beforeend", `${pig.name}`);
            (_b = document
                .querySelector("#infoType")) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML("beforeend", `${type}`);
            (_c = document
                .querySelector("#infoWeight")) === null || _c === void 0 ? void 0 : _c.insertAdjacentHTML("beforeend", `${pig.weight}`);
            (_d = document
                .querySelector("#infoHeight")) === null || _d === void 0 ? void 0 : _d.insertAdjacentHTML("beforeend", `${pig.height}`);
            (_e = document
                .querySelector("#infoAbility1")) === null || _e === void 0 ? void 0 : _e.insertAdjacentHTML("beforeend", `${pig.ability1}`);
            (_f = document
                .querySelector("#infoAbility2")) === null || _f === void 0 ? void 0 : _f.insertAdjacentHTML("beforeend", `${pig.ability2}`);
            (_g = document
                .querySelector("#infoOverall")) === null || _g === void 0 ? void 0 : _g.insertAdjacentHTML("beforeend", `${pig.overall}`);
        }
    }
    return {
        setters: [
            function (PiggemonController_1_1) {
                PiggemonController_1 = PiggemonController_1_1;
            },
            function (PiggemonModels_1_1) {
                PiggemonModels_1 = PiggemonModels_1_1;
            }
        ],
        execute: function () {
            pServices = new PiggemonController_1.PiggemonServices();
            moreInfoID = 1;
            typeTable = document.querySelector("#pType");
            tableBody = document.querySelector("#table-body");
            addbtn = document.querySelector("#add-btn");
            mainTableBody = document.querySelector("#main-table-body");
            updateDataFromLocalStorage(pServices);
            populateInfoTable();
            typeTable === null || typeTable === void 0 ? void 0 : typeTable.addEventListener("change", function (e) {
                if (e.target != null) {
                    if (e.target.value == "0") {
                        if (tableBody != null) {
                            document
                                .querySelectorAll(".ability")
                                .forEach((e) => e.remove());
                            tableBody.insertAdjacentHTML("beforeend", ' <tr class="ability"><th scope="row"><b>Water Ability</b></th><th><input type="number" name="wAbility" id="Ability1" class="ability1"/></th></tr>');
                            tableBody.insertAdjacentHTML("beforeend", ' <tr  class="ability"><th scope="row"><b>Ice Ability</b></th><th><input type="number" name="iAbility" id="Ability2"  class="ability2"/></th></tr>');
                        }
                    }
                    else if (e.target.value == "1") {
                        if (tableBody != null) {
                            document
                                .querySelectorAll(".ability")
                                .forEach((e) => e.remove());
                            tableBody.insertAdjacentHTML("beforeend", ' <tr  class="ability"><th scope="row"><b>Fire Ability</b></th><th><input type="number" name="fAbility" id="Ability1" class="ability1"/></th></tr>');
                            tableBody.insertAdjacentHTML("beforeend", ' <tr  class="ability"><th scope="row"><b>Charm Ability</b></th><th><input type="number" name="cAbility" id="Ability2" class="ability2"/></th></tr>');
                        }
                    }
                    else {
                        if (tableBody != null) {
                            document
                                .querySelectorAll(".ability")
                                .forEach((e) => e.remove());
                            tableBody.insertAdjacentHTML("beforeend", ' <tr  class="ability"><th scope="row"><b>Electricity Ability</b></th><th><input type="number" name="eAbility" id="Ability1" class="ability1"/></th></tr>');
                        }
                    }
                }
            });
            addbtn === null || addbtn === void 0 ? void 0 : addbtn.addEventListener("click", function (e) {
                let n = document.querySelector("#pName").value;
                let h = parseInt(document.querySelector("#pHeight").value);
                let w = parseInt(document.querySelector("#pWeight").value);
                let t = parseInt(document.querySelector("#pType").value);
                let a1 = parseInt(document.querySelector(".ability1").value);
                let optional_a2 = document.querySelector(".ability2");
                let a2;
                if (optional_a2 != null) {
                    a2 = parseInt(optional_a2.value);
                }
                else {
                    a2 = 0;
                }
                let id = PiggemonController_1.PiggemonServices.currentID;
                let p;
                switch (t) {
                    case 0: {
                        p = new PiggemonModels_1.Yorkshire(id, n, h, w, a1, a2);
                        break;
                    }
                    case 1: {
                        p = new PiggemonModels_1.Lean(id, n, h, w, a1, a2);
                        break;
                    }
                    case 2: {
                        p = new PiggemonModels_1.Potbelly(id, n, h, w, a1);
                        break;
                    }
                    default: {
                        p = new PiggemonModels_1.Yorkshire(id, n, h, w, a1, a2);
                        break;
                    }
                }
                PiggemonController_1.PiggemonServices.currentID++;
                pServices.addPig(p);
                window.location.href = "./index.html";
                updateDataFromLocalStorage(pServices);
            });
        }
    };
});
