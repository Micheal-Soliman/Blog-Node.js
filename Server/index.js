const express = require('express')
const app = express()
const port = 3001
const db = require('./models')
const routes = require('./routes/index')
app.use(express.json())


// routes
app.use('/posts', routes.Posts)
app.use('/comments', routes.Comments)
app.use('/auth', routes.Users)
app.use('/likes', routes.Likes)


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}).catch((err) => {console.log(err)})
