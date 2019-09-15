const express = require('express');
const app = express();
const indexRouter = require('./routers/index');
const userRouter = require('./routers/user');
const ejsLayout = require('express-ejs-layouts');
const path = require('path');

// Connection To MLab Database
require('./config/db').DB;

// Express Body Parser
app.use(express.urlencoded({ extended:false }));

// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Set
app.use(ejsLayout);
app.set('view engine','ejs');

// Routings
app.use('/',indexRouter);
app.use('/users',userRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    
    console.log(`The server is running on port ${PORT}`);
})