import easy from "./tasks/easy.js";
import middle from "./tasks/middle.js";
import hard from "./tasks/hard.js";
import polygon from "./polygon.js";

// ----------EASY----------
easy.sleep(1000).then(()=>{
    console.log("sleep task");
})

easy.arrayPrototypeTask();

const fn = easy.functionComposion([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4));

// ---------MEDIUM----------

// ---------HARD------------