//局部变量使用let,常量使用const
const add = (a)=>a+1;

const person = {
    name:"Max",
    age:29
};
//拷贝对象
const copyPerson = {...person};
//拷贝数组
const hobbies = ["Sports","Sing"];
const copyArray = [...hobbies];

//使用可变参数
const printNum = (...args)=>{
    console.log(args);
};

printNum(1,4,5);

//使用可变赋值
const {name,age} = person;
console.log(name+","+age);