System.register([], function (exports_1, context_1) {
    "use strict";
    var piggemonType, Piggemon, Yorkshire, Lean, Potbelly;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (piggemonType) {
                piggemonType[piggemonType["yorkshire"] = 0] = "yorkshire";
                piggemonType[piggemonType["lean"] = 1] = "lean";
                piggemonType[piggemonType["potbelly"] = 2] = "potbelly";
            })(piggemonType || (piggemonType = {}));
            exports_1("piggemonType", piggemonType);
            Piggemon = class Piggemon {
                constructor(id, name, height, weight) {
                    this.id = 0;
                    this.id = id;
                    this.name = name;
                    this.height = height;
                    this.weight = weight;
                }
            };
            exports_1("Piggemon", Piggemon);
            Yorkshire = class Yorkshire extends Piggemon {
                constructor(id, name, height, weight, ability1, ability2) {
                    super(id, name, height, weight);
                    this.pType = piggemonType.yorkshire;
                    this.ability1 = ability1;
                    this.ability2 = ability2;
                    this.overall = (height + weight + ability1 + ability2) / 4;
                }
            };
            exports_1("Yorkshire", Yorkshire);
            Lean = class Lean extends Piggemon {
                constructor(id, name, height, weight, ability1, ability2) {
                    super(id, name, height, weight);
                    this.pType = piggemonType.lean;
                    this.ability1 = ability1;
                    this.ability2 = ability2;
                    this.overall = (height + weight + ability1 + ability2) / 4;
                }
            };
            exports_1("Lean", Lean);
            Potbelly = class Potbelly extends Piggemon {
                constructor(id, name, height, weight, ability1) {
                    super(id, name, height, weight);
                    this.pType = piggemonType.potbelly;
                    this.ability1 = ability1;
                    this.overall = (height + weight + ability1) / 3;
                }
            };
            exports_1("Potbelly", Potbelly);
        }
    };
});
