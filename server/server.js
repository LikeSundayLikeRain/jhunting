const express = require('express')
const userRouter = require('./user')

const app = express()

app.use('/user', userRouter)

app.listen(9093, () => {
  console.log('Node server started at port 9093')
})
