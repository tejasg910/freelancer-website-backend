const express = require("express");

const apiRouter = express.Router({ mergeParams : true });

const userRouter = require('./user.routes')
const projectsRouter = require('./project.routes')
const favoutiesRouter = require('./favourites.routes');
const hireRouter = require('./hire.routes');
const searchRouter = require('./search.routes');


apiRouter.use('/search', searchRouter)
apiRouter.use('/users', userRouter)
apiRouter.use('/projects', projectsRouter)
apiRouter.use('/favourites', favoutiesRouter)
apiRouter.use('/hire', hireRouter)

module.exports = apiRouter
