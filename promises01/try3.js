/*
    A synchronous throw, even though it is inside of an async function gets caught
    by the calling function.

    But in this case, is throwAnError really a promise (async)?
    - See the next example
    
*/

const throwAnError = async () => {
  throw new Error('throwAnError()')
}

const callIt = async () => {
  try {
    await throwAnError()
    console.log('callIt: Is done.')
  } catch (e) {
    console.log('call: Caught an error.')
  }
}

console.log('--- try3')

callIt()
