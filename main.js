System.register(["./PiggemonController", "./PiggemonModels"], function (exports_1, context_1) {
    "use strict";
    var _a, PiggemonController_1, PiggemonModels_1, typeTable, tableBody, addbtn, pServices;
    var __moduleName = context_1 && context_1.id;
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
            typeTable = document.querySelector("#pType");
            console.log(typeTable);
            tableBody = document.querySelector("#table-body");
            addbtn = document.querySelector("#add-btn");
            pServices = new PiggemonController_1.PiggemonServices();
            (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.addEventListener("load", function () {
                pServices = new PiggemonController_1.PiggemonServices();
            });
            typeTable.addEventListener("change", function (e) {
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
                let p;
                switch (t) {
                    case 0: {
                        p = new PiggemonModels_1.Yorkshire(n, h, w, a1, a2);
                        break;
                    }
                    case 1: {
                        p = new PiggemonModels_1.Lean(n, h, w, a1, a2);
                        break;
                    }
                    case 2: {
                        p = new PiggemonModels_1.Potbelly(n, h, w, a1);
                        break;
                    }
                    default: {
                        p = new PiggemonModels_1.Yorkshire(n, h, w, a1, a2);
                        break;
                    }
                }
                pServices.addPig(p);
                window.location.href = "./index.html";
            });
        }
    };
});
