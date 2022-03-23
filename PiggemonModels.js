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
                constructor(name, height, weight) {
                    this.id = 0;
                    this.name = name;
                    this.height = height;
                    this.weight = weight;
                }
            };
            exports_1("Piggemon", Piggemon);
            Yorkshire = class Yorkshire extends Piggemon {
                constructor(name, height, weight, waterAbility, iceAbility) {
                    super(name, height, weight);
                    this.pType = piggemonType.yorkshire;
                    this.waterAbility = waterAbility;
                    this.iceAbility = iceAbility;
                    this.overall = (height + weight + waterAbility + iceAbility) / 4;
                }
            };
            exports_1("Yorkshire", Yorkshire);
            Lean = class Lean extends Piggemon {
                constructor(name, height, weight, fireAbility, charmAbility) {
                    super(name, height, weight);
                    this.pType = piggemonType.lean;
                    this.fireAbility = fireAbility;
                    this.charmAbility = charmAbility;
                    this.overall = (height + weight + fireAbility + charmAbility) / 4;
                }
            };
            exports_1("Lean", Lean);
            Potbelly = class Potbelly extends Piggemon {
                constructor(name, height, weight, electricAbility) {
                    super(name, height, weight);
                    this.pType = piggemonType.potbelly;
                    this.electricAbility = electricAbility;
                    this.overall = (height + weight + electricAbility) / 3;
                }
            };
            exports_1("Potbelly", Potbelly);
        }
    };
});
