System.register([], function (exports_1, context_1) {
    "use strict";
    var PiggemonServices;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PiggemonServices = class PiggemonServices {
                constructor() {
                    this.piggemonList = [];
                    this.retrieveAllPigs();
                }
                addPig(p) {
                    p.id = PiggemonServices.currentID;
                    PiggemonServices.currentID++;
                    this.piggemonList.push(p);
                    localStorage.setItem(p.id.toString(), JSON.stringify(p));
                    window.alert("Successfully added a new Piggemon!");
                }
                getPig(id) {
                    return this.piggemonList[id];
                }
                deletePig(p) {
                    this.piggemonList.splice(p.id, 1);
                    localStorage.removeItem(p.id.toString());
                }
                retrieveAllPigs() {
                    PiggemonServices.currentID = localStorage.length;
                    console.log(PiggemonServices.currentID);
                    for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        if (key != null) {
                            var value = JSON.parse(localStorage[key]);
                            console.log(value);
                            console.log(typeof value);
                        }
                    }
                }
            };
            exports_1("PiggemonServices", PiggemonServices);
            PiggemonServices.currentID = 0;
        }
    };
});
