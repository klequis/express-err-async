import express from 'express'
import {
  find,
  findById,
  insertOne,
  findOneAndDelete,
  findOneAndUpdate
} from '../db'
// import { check, validationResult } from 'express-validator'
import { yellow, red } from '../logger'
import { removeIdProp } from '../db/helpers'


const router = express.Router()

const throwAnError = async () => {
  setTimeout(() => {
    throw new Error('throwAnError()')
  }, 1000)

  
}


router.get('/', async function(req, res) {
  try {
    await throwAnError()
  } catch {
    yellow('it threw')
    throw new Error('something broke!')
  }
  
  
})

router.get('/', async (req, res) => {
  try {
    
    const td1 = await find('todos')
    res.send(td1)
  } catch (e) {
    
    const err = getError(e)
    res.status(err.status).send(err)
  }
})

router.get('/next', function(req, res, next) {
  process.nextTick(function() {
    next(new Error('oh no!'))
  })
})

export default router
