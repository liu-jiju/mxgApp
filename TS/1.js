// let a:number = 1
// let b:string = 1
// let c:number = 0,
// c = a+b
// let foo =1;
// foo.split('');
// let num1 =1
// let num2 = 2
// let sum = num1+num2
// console.log(sum);
// let myName:string = '小红'
// let myAge:number = 12
// let sentence = `My name is ${myName},My age is ${myAge}`
// document.body.innerHTML = sentence
// let list:number[] = [1,2,3,4]
// let listString:string[] =['1','2','3']
// console.log(list);
// console.log(listString);
// let list: number[] = [1,2,3,'4']
// let list:number[] = [1,2,3,4]
// list.push(6)
// console.log(list);
// let listString:string[] = ['1','2','3']
// listString.push('9')
// console.log(listString);
// let arrayList: Array<number> = [1,2,3]
// let stringList: Array<string> = ['1','2','3']
// console.log(arrayList);
// console.log(stringList);
// declare function create(o:object | null) : void
// create({props: 0})
// create(null)
// create(3222) //类型“number”的参数不能赋给类型“object”的参数。
// create('dddd') //类型“string”的参数不能赋给类型“object”的参数。
// create(undefined) //类型“undefined”的参数不能赋给类型“object | null”的参数。
//简单
// let obj: {name: string}
// obj = {name: '小红', age: 13}
// let tom: [string,number];
// tom[0] = ['Tom'];
// // tom[1] = [25];
// console.log(tom);
// tom[0].slice(1)
// tom[1].toFixed(2)
// let value:any;
// value = 123
// value = 'abc'
// value = false
// const array: any[] = [1,'a',true]
// function alertName(): void {
//     console.log('My name is void');
//     return 123
// }
// function alertName(): string{
//     console.log('My name is void');
//     return 'My name is void'
// }
// alertName()
// never
// function error(message:string): never {
//     throw new Error(message);
// }
// function fail(){
//     return error('Something failed');
// }
//枚举
// enum Color {
//     Red = 1,
//     Blue = 2,
//     Green = 3
// }
// let c:Color = Color.Green;
// console.log(c);
//交叉类型
// interface use {
//     name: string,
//     age: number
// }
// interface per {
//     sex: number
// }
// type allInfo = use & per
// let persion: allInfo = {name: 'xxx',age: 1,sex:1}
//联合类型
// let allType: number | string
// allType = 1;
// allType = 'eddd'
//类型断言
// let someValue: any;
// someValue = 123;
// someValue = 'dddd';
// let someValueLength = (<string>someValue).length
// console.log(someValueLength);
//as
// let someName: any;
// someName = 123
// someName = '123'
// let someNameValuelength = (someName as string).length
// console.log(someNameValuelength);
//数字枚举   
//1.递增方式新增索引
// enum Status {
//     Uploading,
//     Success,
//     Falied
// }
// console.log(Status.Uploading);
// console.log(Status['Success']);
// console.log(Status.Falied);
//字符串枚举
// const getValue = () =>{
//     return 0
// }
// const names = '小明'
// enum Message {
//     Error = 'error message',
//     SuccessError = 200,
//     ClientError = names
// }
// console.log(Message.SuccessError,'SuccessError');
// console.log(Message.Error);
// console.log(Message['ClientError']);
//枚举成员类型
// enum Animal {
//     dog = 1,
//     cat = 2,
// }
// interface dog {
//     type: Animal.dog
// }
// interface cat {
//     type: Animal.cat
// }
// let cat1: cat = {
//     type: Animal.dog
// };
// let dog: dog = {
//     type: Animal.dog
// }
//联合枚举类型
var Keys;
(function (Keys) {
    Keys[Keys["Off"] = 0] = "Off";
    Keys[Keys["On"] = 1] = "On";
})(Keys || (Keys = {}));
var Light4 = {
    status: Keys.Off
};
