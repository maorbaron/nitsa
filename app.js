const express = require('express');
const funRouter = require('./routes/fun.router');
const app = express();

// setting up scope app variables 
const port = 4444;

// application configuration and init
app.use(express.json());

// setting routes
app.use('/fun', funRouter);

// starting app 
app.listen(port,()=>{
    console.log(`server started on port: ${port}`)
})