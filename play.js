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

const person = {
    name:"Max",
    age:29
};
const {name, age} = person;
console.log(`My name is ${name}, I'm ${age} years old`);