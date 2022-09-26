// let a:number =1
// let b:string =1
// let c:number =0
// c = a + b
// console.log(c);
var getVegetables = function (_a) {
    var color = _a.color, type = _a.type;
    return "A ".concat(color ? color + '' : '').concat(type);
};
getVegetables({
    type: 'tomato',
    size: 12,
    price: 1.2
});
