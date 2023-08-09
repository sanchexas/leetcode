import easy from "./tasks/easy.js";
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
// ---------MEDIUM----------
// ---------HARD------------
// ---------POLYGON---------
const pipeFunction = polygon.pipes(x => x + 1, x => x * x, x => 2 * x);
console.log(pipeFunction(5)); // 72
