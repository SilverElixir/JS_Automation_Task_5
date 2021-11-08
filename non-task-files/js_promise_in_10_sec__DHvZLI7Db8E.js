const userLeft = true
const userWatchingAd = false

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'User has left',
            message: ':('
        })
    }else if (userWatchingAd){
        errorCallback({
            name: 'User watching YouTube ad',
            message: 'YouTube Ads'
        })
    }else{
        callback('Thumbs up & subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})