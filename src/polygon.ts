declare global {
    type FuncNumType = (x: number) => number
}

class Polygon{
    pipes(...functions: FuncNumType[]): FuncNumType{
        return function(x: number){
            return functions.reduce((resultValue, fc) => fc(resultValue), x);
        }
    }
    
}

export default new Polygon;