
function makeRequest(location){
    return new Promise( (resolve,reject)=> {
        console.log(`Making a new Request to ${location}`)
		console.log('For Github Viewing')
        //response
        if (location === 'Google') {
            resolve('Google say Hi')
        } else{
            reject('We can only talk to Google')
        }

    })
}

function processRequest(response) {
    return new Promise((resolve,reject) => {
        console.log('Processing Response')
        resolve(`Extra Information ${response}`)
    })
}


//async and await
async function doWork(){
    try {
      const response = await makeRequest('Google')
      console.log('Response Received');
      const processedResponse = await processRequest(response)
      console.log(processedResponse)
    }catch (err) {
        console.log(err)
    }
}

// doWork();

// Using Promise()
makeRequest('Google').then( res => {
    console.log('Response Received') 
    return processRequest(res)
}).then(processedResponse => {
    console.log('line23')
    console.log(processedResponse)
}).catch( err => {
    console.log(err)
})


// const recordVideoOne = new Promise( (resolve,reject)=>{
//     resolve('Video Record 1')
// })
// const recordVideoTwo = new Promise( (resolve,reject)=>{
//     resolve('Video Record 2')
// })
// const recordVideoThree= new Promise( (resolve,reject)=>{
//     resolve('Video Record 3')
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then( message => {
//     console.log(message)
// })

//Execute All Promises...
// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then( messages => {
//     console.log(messages)
// })



//-----------------------------------------------
// const userLeft = false;
// const userWatchCatMeme = false;


// function watchTutorialPromise() {
//  return new Promise( (resolve,reject) => {
//      if(userLeft) {
//          reject({
//              name:'User Left',
//              message : ':('
//          })
//      } 
//      else if (userWatchCatMeme) {
//          reject({
//             name:'User Watching Meme',
//             message : 'WebDevSimplified < cat' 
//          })
//      } 
//      else {
//          resolve('Thumbs up and subscribe')
//      }
//  })
// }

// watchTutorialPromise().then(message => {
//     console.log(`Success ${message}`) //resolve
// }).catch( error => {
//     console.log(`${error.name} ${error.message}`)
// })