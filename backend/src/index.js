const express  = require('express')
const routes = require('./routes')
const cors = require('cors');
const { errors } = require('celebrate');
const port = 3333;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())

app.listen(port, (err) =>{
    if(err){
        console.log(`We have a problem! ${err}`)
    }else{
        console.log(`We are running on port ${port}!`)
    }
})