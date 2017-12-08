import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import AddUser from './userAdd'

// AddUser()

const app = express()

// 3rd party middleware
app.use(cors({
	exposedHeaders: [ "Link" ]
}))

// logger
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

export default app
