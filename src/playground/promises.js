const promise = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve('Promise is resolved');

    // },6000);
    reject('Something went wrong');
});

promise.then((data)=>{
    console.log('Promise complete', data);
}).catch((error) => {
    console.log('error:',error);
});
console.log('printitng somethign before promise');