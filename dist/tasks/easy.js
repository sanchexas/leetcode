var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Easy {
    /**
     * -Sleep
     * Given a positive integer millis, write an asynchronous function
     * that sleeps for millis milliseconds. It can resolve any value.
     *
     * TOPICS:
     * -Promises
     */
    sleep(millis) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve) => {
                setTimeout(resolve, millis);
            });
        });
    }
    /**
     * -Array Prototype Last
     * Write code that enhances all arrays such that you can call the array.last() method
     * on any array and it will return the last element.
     * If there are no elements in the array, it should return -1.
     * You may assume the array is the output of JSON.parse.
     *
     * TOPICS:
     * -Prototype inheritance and the `prototype` property
     *
     * SOURCE:
     * -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype#changing_the_prototype_of_all_instances_by_mutating_the_prototype_property
     */
    arrayPrototypeTask() {
        Array.prototype.last = function () {
            if (this.length !== 0 || this.length >= 1000) {
                return this[this.length - 1];
            }
            return -1;
        };
        let arr = [1, {}, 12];
        console.log(arr.last()); // 12
    }
    /**
     * -Function Composition
     * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
     * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
     * The function composition of an empty list of functions is the identity function f(x) = x.
     * You may assume each function in the array accepts one integer as input and returns one integer as output.
     *
     * TOPICS:
     * -JS Functional Concepts: Pipe and Compose
     *
     * SOURCE:
     * -https://dev.to/joelbonetr/js-functional-concepts-pipe-and-compose-1mho
     * -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     * -https://frontend-stuff.com/blog/composition/
     *
     * !!! NOTE: composition and piping are almost the same, the only difference being the execution order;
     * If the functions are executed from left to right, it's a PIPE, on the other hand,
     * if the functions are executed from right to left it's called COMPOSE.
     */
    functionComposion(functions) {
        return function (x) {
            return functions.reduceRight((result, func) => func(result), x);
        };
    }
    /**
     * Given an integer array arr and a filtering function fn,
     * return a filtered array filteredArr.
     * The fn function takes one or two arguments:
     *  1) arr[i] - number from the arr
     *  2) i - index of arr[i]
     * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
     * Please solve it without the built-in Array.filter method.
     *
     * TOPICS:
     * -higher-order function
     *
     * SOURCE:
     * -https://habr.com/ru/companies/ruvds/articles/428570/
     */
    filter(arr, fn) {
        const filteredArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i)) {
                filteredArray.push(arr[i]);
            }
        }
        return filteredArray;
    }
    // bruh easy...
    argsLength(...args) {
        return args.length;
    }
    /**
     * Write a function expect that helps developers test their code.
     * It should take in any value val and return an object with the following two functions.
     * -toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
     * -notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
     */
    expect(val) {
        const error = (message) => { throw new Error(message); };
        return {
            toBe: (toBeVal) => toBeVal === val ? true : error("Not Equal"),
            notToBe: (notToBeVal) => notToBeVal !== val ? true : error("Equal")
        };
    }
    /**
     * Search Insert Position
     *
     * Given a sorted array of distinct integers and a target value,
     * return the index if the target is found.
     * If not, return the index where it would be if it were inserted in order.
     * You must write an algorithm with O(log n) runtime complexity.
     *
     * TOPICS:
     * -Binary search
    */
    searchInsert(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        let middle;
        let guess;
        while (low <= high) {
            middle = Math.floor((low + high) / 2);
            guess = nums[middle];
            if (guess === target) {
                return middle;
            }
            else if (target < guess) {
                high = middle - 1;
            }
            else if (target > guess) {
                low = middle + 1;
            }
        }
        return high + 1;
    }
    ;
    /**
     * -moveZeroes
     *
     * Do not return anything, modify nums in-place instead.
     * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
     * Note that you must do this in-place without making a copy of the array.
    */
    moveZeroes(nums) {
        let zeroQuantity = 0;
        for (let i = 0; i < nums.length;) {
            if (nums[i] === 0) {
                nums.splice(i, 1);
                zeroQuantity += 1;
            }
            else
                i++;
        }
        for (let i = 0; i < zeroQuantity; i++) {
            nums.push(0);
        }
        return nums;
    }
    ;
    //-Length of Last Word
    lengthOfLastWord(s) {
        const wds = s.trim().split(' ');
        return wds[wds.length - 1].length;
    }
    ;
}
export default new Easy;
