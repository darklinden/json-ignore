const hackJSON = (cls: any, jsonIgnore: string[]) => {
    console.log(cls, jsonIgnore);
    var result: { [key: string]: any } = {};

    for (var k in cls) {
        if (k == 'jsonIgnore') continue;
        if (jsonIgnore.indexOf(k) != -1) continue;
        result[k] = cls[k];
    }
    return result;
};

function JsonIgnore(cls: any, name: string) {
    cls.jsonIgnore = cls.jsonIgnore || [];
    cls.jsonIgnore.push(name);
    cls.toJSON = function () {
        return hackJSON(this, cls.jsonIgnore);
    };
}

export { JsonIgnore };