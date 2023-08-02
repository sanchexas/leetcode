class Polygon {
    pipes(...functions) {
        return function (x) {
            return functions.reduce((resultValue, fc) => fc(resultValue), x);
        };
    }
}
export default new Polygon;
