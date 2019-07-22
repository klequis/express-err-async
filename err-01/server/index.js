import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import todo from 'routes/todo-route'

const app = express()

var test = app.get('env') === 'test'

if (!test) app.use(logger('dev'))

function error(err, req, res, next) {
  console.log('function error()')
  if (!test) console.error(err.message)
  res.status(500)
  res.send('Internal Server Error')
}

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/', todo)



// error stuff


// Should I have this one?
app.get('*', function(req, res, next) {
  let err = new Error('Page Not Found')
  err.statusCode = 404
  next(err)
})


app.use(error)

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000)
  console.log('Express started on port 3000')
}

export default app