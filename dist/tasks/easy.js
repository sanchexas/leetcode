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
}
export default new Easy;
