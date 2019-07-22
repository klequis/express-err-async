/*
    `callIt` will complete and then the throw in `throwAnError` will crash the app
*/


const throwAnError = async () => {
  setTimeout(() => {
      throw new Error('throwAnError()')
  }, 500)
}


const callIt = async () => {
  try {
    await throwAnError()
    console.log('callIt: Is done.')
  } catch (e) {
    console.log('call2: Caught an error.')
  }
}

callIt()