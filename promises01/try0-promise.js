import fetch from 'node-fetch'
import { rejects } from 'assert';

// fetch('http://ip-api.com/json')
//   .then(r => r.json())
//   .then(j => console.log(j))
//   .catch(e => console.log('CATCH', e.message))

const getIp = async () => {
  const a = await fetch('http://ip-api.com/json')
  // console.log('a', a)
  return a
}

export default function to(promise) {
  return promise
    .then(data => {
      return [null, data]
    })
    .catch(err => [err])
}


const run = async () => {
  // let err, res
  const [err, res] = await to(getIp())
  const json = await res.json()
  console.log('json', json);
  
}





// const run = async () => {
//   try {
//     const r1 = await getIp()
//     const r2 = await r1.json()
//     console.log('r2', r2)
//   } catch (e) {
//     console.log('CATCH', e.message);
    
//   }
// }

run()
