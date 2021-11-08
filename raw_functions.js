function function1(data){ 
    return new Promise((resolve, reject) => {
        if(isNaN(data)){
            reject('error');
        }else if(data % 2 == 0){
            setTimeout(() => {
                reject('even');
            }, 2000)
        }
        else{
            setTimeout(() => {
                resolve('odd');
            }, 1000)
        }
})};

// shortener version of above syntax: 
// setTimeout(() => { reject('even');}, 2000)
// vs
// setTimeout(reject, 2000, 'even');
// function function1(data){ 
//     return new Promise((resolve, reject) => {
//         if(isNaN(data)){
//             reject('error');
//         }else if(data % 2 == 0){
//             setTimeout(reject, 2000, 'even');
//         }
//         else{
//             setTimeout(resolve, 1000, 'odd');
//         }
// })};

function function2(result){
	return new Promise((resolve, reject) => {
	if(result !== 'error'){
	   console.log(`Your number is ${result}`);
	   resolve();	
	}
})
};

export { function1, function2 };