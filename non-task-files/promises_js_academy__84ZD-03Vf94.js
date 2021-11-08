const PUSHUP_TIME = 500;
const SQUATS_TIME = 300;

function pushUps(count){ 
    return new Promise((resolve, reject) => {
        if(count > 100){
            reject(new Error('Too much push-ups'));
        }else if(count < 10){
            reject(new Error('Not enough push-ups...'));
        }
        setTimeout(() => {
            resolve('Did ${count} push-ups...');
        }, count * PUSHUP_TIME)
})};


function squats(count){ 
    return new Promise((resolve, reject) => {
        if(count > 100){
            reject(new Error('Too much squats'));
        }else if(count < 10){
            reject(new Error('Not enough squats...'));
        }
        setTimeout(() => {
            resolve();
        }, count * SQUATS_TIME);
})};


console.log('Start the workout...');
pushUps(10).then(() => {
    console.log('Did 10 push-ups');
    return squats(20);
})
.then(() => {
    console.log('Did 20 squats');
})
.catch((err) => {
    console.log(err.toString());
});
// .catch(() => {
//     console.log('Got tired...Cannot proceed anymore...')
// });


async function workout(){
  try{  
    console.log('Start the training...');
    await pushUps(10)
    console.log('Did 10 push-ups');
    await squats(20);
    console.log('Did 20 squats');
    return true;
  }
catch(err){
    console.log(err.toString());
    return false;
}};


