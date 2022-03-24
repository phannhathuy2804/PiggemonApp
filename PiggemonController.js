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
                    this.piggemonList.push(p);
                    localStorage.setItem(p.id.toString(), JSON.stringify(p));
                    window.alert("Successfully added a new Piggemon!");
                    console.log("current Id" + PiggemonServices.currentID);
                }
                getPig(id) {
                    let stringID = id.toString();
                    console.log("string key: " + stringID);
                    let pig;
                    let stringValue = localStorage.getItem(stringID);
                    console.log("string value: " + stringValue);
                    if (stringValue != null) {
                        pig = JSON.parse(stringValue);
                        return pig;
                    }
                    return null;
                }
                deletePig(pid) {
                    this.piggemonList.splice(pid, 1);
                    console.log("Removing" + pid);
                    localStorage.removeItem(pid.toString());
                }
                retrieveAllPigs() {
                    let Arr = [];
                    for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        if (key != null) {
                            Arr.push(parseInt(key));
                        }
                    }
                    let maxID;
                    maxID = Math.max.apply(null, Arr);
                    if (localStorage.length == 0) {
                        maxID = 0;
                    }
                    if (maxID != null) {
                        PiggemonServices.currentID = maxID + 1;
                        console.log(PiggemonServices.currentID);
                        for (let i = 0; i < localStorage.length; i++) {
                            let key = localStorage.key(i);
                            if (key != null) {
                                var value = JSON.parse(localStorage[key]);
                            }
                        }
                    }
                }
            };
            exports_1("PiggemonServices", PiggemonServices);
            PiggemonServices.currentID = 0;
        }
    };
});
