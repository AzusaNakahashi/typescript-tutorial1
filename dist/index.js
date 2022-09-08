"use strict";
var _a;
let sales = 123456789;
let course = "TypeScript";
let level;
let numberArray1 = [];
let numberArray3 = [1, 2, "3"];
let user = [1, "Mosh"];
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
let employee = {
    id: 1,
    name: "Azusa",
    retire: (date) => {
        console.log(date);
    },
};
let worker = {
    id: 1,
    name: "Azusa",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("hello");
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map