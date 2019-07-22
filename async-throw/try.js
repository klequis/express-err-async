const throwAnError = async () => {
  setTimeout(() => {
    throw new Error('throwAnError()')
    
  }, 1000)
}


const callIt = async () => {
  try {
    await throwAnError()
    console.log('I am done already!')
  } catch (e) {
    console.log('it threw')
  }
}

callIt()