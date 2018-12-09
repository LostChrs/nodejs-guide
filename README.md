# nodejs-guide
>关闭端口号   xl_close_port -p 3000
### js常用写法
```
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

console.log(`My name is ${name}, I'm ${age} years old`);
```

### Promise
```
const FetchData = ()=>{
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done!");
        },100);
        
    });
    return promise;
}

console.log("game start");

FetchData().then((text)=>{
    console.log(text);
    return FetchData();
}).then((text)=>{
    console.log("2...."+text);
});
```