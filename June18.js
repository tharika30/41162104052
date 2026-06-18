function example(){
    console.log("B")
}
function example1(){
    console.log("D")
}
console.log("A")
setTimeout(example,0)
setTimeout(example1,2000)
console.log("C")

const promise = new Promise((resolve,reject)=>{
    // const sucess = true;
    // if(sucess){
    //     console.log("done");
    // }else{
    //     console.log("fail");
    // }
setTimeout(()=>{
    console.log("Hi")
},1000)
})
promise.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})