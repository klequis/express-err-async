/*

    This doesn't work either. The nested anonymous function 

*/


const asyncThrow = async () => {
  try {
    throw new Error('asyncThrowAnError - from timer')
  } catch (e) {
    console.log('asyncThrowAnError - catch')
  }
}


// const asyncThrowWithTimer = async () => {
//   try {
//     setTimeout(() => {
//       throw new Error('asyncThrowAnError - from timer')
//     }, 1000)
//   } catch (e) {
//     console.log('asyncThrowAnError - catch')
//   }
// }

// const callIt1 = async () => {
//   try {
//     await asyncThrowWithTimer()
//   } catch (e) {
//     console.log('callIt - catch ERROR:', e)
//   }
// }

// callIt1()


const callIt2 = async () => {
  try {
    await asyncThrow()
  } catch (e) {
    console.log('callIt - catch ERROR:', e)
  }
}

callIt2()



///////////////////////////////////////////////////////////////////////////


// const asyncThrows = async () => {
//   try {
//     throw new Error('asyncThrew')
//   } catch (e) {
//     throw new Error('asyncThrows - error')
//   }
// }

// ;(async () => {
//   try {
//     console.log('2')
//     const r = await asyncThrows()
//   } catch (e) {
//     console.log('6')

//     console.log('catch ***********')
//   }
// })()

///////////////////////////////////////////////////////////////////////




// const callSync = () => {
//   try {
//     console.log('1');
    
//     ;(async () => {
      
//       try {
//         console.log('2')
//         const r = await asyncThrows()
//       } catch (e) {
//         console.log('6');
        
//         console.log('catch ***********');
        
//       }
//     })()
//     console.log('callSync - is done.')
//   } catch (e) {
//     console.log('6')
//     console.log('callSync - catch');
//     console.log('7')
//     console.log('callSync: Caught an error.')
//   }
// }

// callSync()


// /*

//     To catch the error

// */

// const asyncThrowAnError = async () => {
//   try {
//     setTimeout(() => {
//       throw new Error('throwAnError()')
//     }, 1000)
//   } catch (e) {
//     console.log('throwAnError: Caught an error.')
//   }
// }

// const callIt = () => {
//   try {
//     ;(async () => await asyncThrowAnError())()
//     console.log('callSync: I am done.')
//   } catch (e) {
//     console.log('callSync: Caught an error.')
//   }
// }

// callIt()
