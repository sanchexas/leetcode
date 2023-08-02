declare global {
    interface Array<T> {
        last(): T | -1;
    }
    type FuncComposeType = (x: number) => number;
}

class Easy{
    /**
     * -Sleep
     * Given a positive integer millis, write an asynchronous function
     * that sleeps for millis milliseconds. It can resolve any value.
     * 
     * TOPICS:
     * -Promises
     */
    async sleep(millis: number): Promise<void> {
        await new Promise((resolve): void => {
            setTimeout(resolve, millis);
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
    arrayPrototypeTask(): void{
        Array.prototype.last = function(){
            if(this.length !== 0 || this.length !>= 1000){
                return this[this.length-1];
            }   
            return -1;
        }
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
    functionComposion(functions: FuncComposeType[]): FuncComposeType{
        return function(x){
            return functions.reduceRight((result, func) => func(result), x);
        }
    }
}

export default new Easy;