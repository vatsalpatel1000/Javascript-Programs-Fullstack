const app=require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');

const routes= require('./routes/routes');

app.use(bodyParser.json());
app.use(cors());

app.use("/books",routes);

//mongoose connection
mongoose.connect("mongodb://localhost:27017/prog33",)
.then(()=>{console.log("db connected")})
.catch(()=>{console.log("db not connecting")})

//server running code
const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})