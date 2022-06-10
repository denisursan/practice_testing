
let promise = new Promise((resolve,reject)=>{
  let a= 1+1

  if(a == 2){
      resolve("Promise Fulfilled")
  }else{
      reject('Promise not fulfilled')
  }
})
// then returns a Promise when it's called 
promise.then((message)=>{
    console.log(message + ', promise has passed!')
}).catch((message)=>{
    console.log(message + ', promise has failed!')
})