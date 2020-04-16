# idea
 - choose a spell or equipment or starting class
 - make a static page that gets the data and displays it
 - then you could move on to where you give them a list of them and they can choose one and press a button and it will retrieve it for the selected one

### uses
- api from [dnd5eapi](http://www.dnd5eapi.co/) with [Docs](http://www.dnd5eapi.co/docs/)

## boilerplate
```
const express = require('express')
const app = express()

const router = require('./router')

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)
```
- requiring in express so I can modularly use a router and controllers
- requires ejs for view engine


## using import instead of require
```import { Router } from 'express'
const router = Router()```

instead of

```const express = require('express')
const router = express.Router()```