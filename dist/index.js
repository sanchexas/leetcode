import easy from "./tasks/easy.js";
import hard from "./tasks/hard.js";
import polygon from "./polygon.js";
// ----------EASY----------
easy.sleep(1000).then(() => {
    console.log("sleep task");
});
easy.arrayPrototypeTask();
const fn = easy.functionComposion([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4));
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(easy.filter(arr1, (n) => {
    return true;
}));
console.log(`Args length: ${easy.argsLength(1, 2, 3, 4, 5)}`);
console.log(easy.expect(5).toBe(5));
console.log(easy.searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
console.log(easy.moveZeroes([0, 0, 1]));
console.log(`Split last word: ${easy.lengthOfLastWord("   fly me   to   the moon  ")}`);
console.log(easy.removeElement([1, 2, 1, 2, 3, 4], 2));
console.log(easy.ipv4Defanging("255.100.50.0"));
console.log('   ▉ ▉' + '\n'
    + '   ▉ ▉' + '\n'
    + '   ▉ ▉ ▉' + '\n'
    + '   ▉ ▉ ▉ ▉' + '\n'
    + '▉ ▉ ▉ ▉ ▉' + '\n' + '1 5 5 3 2');
// ---------MEDIUM----------
// ---------HARD------------
console.log(`median: ${hard.findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1])}`);
// ---------POLYGON---------
let objA = {
    a: "one",
    b: 2,
    c: true
};
let objB = objA;
objB.c = false;
console.table(objA);
const users = [
    {
        name: "test1",
        age: 20
    },
    {
        name: "test2",
        age: 10
    },
    {
        name: "test3",
        age: 15
    }
];
const pipeFunction = polygon.pipes(x => x + 1, x => x * x, x => 2 * x);
console.log(pipeFunction(5)); // 72
// custom map method
Array.prototype.customMap = function (cb) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i]));
    }
    return newArray;
};
// test custom map
users.customMap((user) => {
    console.log(`Name: ${user.name} | Age: ${user.age}`);
});
