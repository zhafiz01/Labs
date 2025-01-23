const translate = require("./index");

describe("translate(word)", () => {
    it("translates 'umbrella' to 'umbrellaway'", () => {
        expect(translate("umbrella")).toEqual("umbrellaway");
    });

    it("translates 'Orange' to 'orangeway'", () => {
        expect(translate("Orange")).toEqual("orangeway");
    });

    it("translates 'dog' to 'ogday'", () => {
        expect(translate("dog")).toEqual("ogday");
    });

    it("translates 'Banana' to 'ananabay'", () => {
        expect(translate("Banana")).toEqual("ananabay");
    });

    it("translates 'strong' to 'ongstray'", () => {
        expect(translate("strong")).toEqual("ongstray");
    });
 
    it("translates 'Three' to 'eethray'", () => {
        expect(translate("Three")).toEqual("eethray");
    });

    it("translates 'HELLO' to 'ellohay' (lowercase conversion)", () => {
        expect(translate("HELLO")).toEqual("ellohay");
    });
});
