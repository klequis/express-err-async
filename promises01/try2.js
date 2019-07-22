/*
    Wrapping the set timer in a try/catch is no help. The result is exactly the same because
    `throwAnError`'s try/catch block is out of scope before the error is thrown.
*/

const throwAnError = async () => {
  try {
    setTimeout(() => {
      throw new Error('throwAnError()')
    }, 1000)
  } catch (e) {
    console.log('CATCH: throwAnError')
    
  }
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
