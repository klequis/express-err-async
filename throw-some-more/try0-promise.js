/*
    `callIt` will complete and then the throw in `throwAnError` will crash the app
*/


const throwAnError = async () => {
  setTimeout(() => {
      throw new Error('throwAnError()')
  }, 500)
}

const reject = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        console.log('reject')
        reject('reject - rejected')
      }, 500)
    }
    resolve('I am resolved')
  })
}


const callIt = async () => {
  try {
    await reject()
    console.log('callIt: Is done.')
  } catch (e) {
    console.log('call2: Caught an error.')
  }
}

callIt()