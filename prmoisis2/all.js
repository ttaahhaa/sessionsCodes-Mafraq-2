// Ways to create Promisis
// hpow to fectch data
// all
// race
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, "hello promise 1")
});

const promise2= fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json());
const promise3 = Promise.resolve("hello promise 3")

function a1(){
    return new Promise((resolve, reject)=>{
        resolve("Resolved a1")
        reject("rejected a1")
    })
}
function a2(){
    return new Promise((resolve, reject)=>{
        resolve("Resolved a2")
        reject("rejected a2")
    })
}
function a3(){
    return new Promise((resolve, reject)=>{
        resolve("Resolved a3")
        reject("rejected a3")
    })
}
// all
Promise.all([a1(), a2(), a3(), promise2]).then((returnedValueFromResolve)=>{
    console.log(returnedValueFromResolve)
})  
// race
Promise.race([a1(), a2(), a3(), promise2]).then((returnedValueFromResolve)=>{
    console.log(returnedValueFromResolve)
})  