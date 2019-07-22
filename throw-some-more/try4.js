/*
    If throwAnError is a promise then it will be then-able, and it is.
    
    To prove this, take the `async` keyword away. In this case, the catch does not get executed.
*/

const throwAnError = async () => {
  throw new Error('throwAnError()')
}

const callIt = () => {
  throwAnError().then(r => console.log('r', r)).catch(e => console.log('** CATCH **', e.message))
}

callIt()
