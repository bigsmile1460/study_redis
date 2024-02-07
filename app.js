const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.port
const moment = require('moment')
const cors = require('cors')
// const morgan = require('morgan')
const bodyParser = require('body-parser')
const redis = require('redis')


app.listen(port, ()=>{
    console.log("===== server start infomation guide =====")
    console.log("1. port: " + port)
    console.log("2. start time: " + moment().format('YYYY-MM-DD HH:mm:ss'))
    console.log("============ server set up end ==========")
})