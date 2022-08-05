"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIgnore = void 0;
const hackJSON = (cls, jsonIgnore) => {
    console.log(cls, jsonIgnore);
    var result = {};
    for (var k in cls) {
        if (k == 'jsonIgnore')
            continue;
        if (jsonIgnore.indexOf(k) != -1)
            continue;
        result[k] = cls[k];
    }
    return result;
};
function JsonIgnore(cls, name) {
    cls.jsonIgnore = cls.jsonIgnore || [];
    cls.jsonIgnore.push(name);
    cls.toJSON = function () {
        return hackJSON(this, cls.jsonIgnore);
    };
}
exports.JsonIgnore = JsonIgnore;
//# sourceMappingURL=index.js.map