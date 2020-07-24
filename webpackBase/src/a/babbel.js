async function start(){
    return await new Promise(r => r('async is working'))
}

start().then(console.log)

class MyClass {
    static id = 5;
}

console.log(MyClass.id);
