const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const db = require('./config/mongoose-connection');
const ownerRouter = require('./routes/ownerRouter');
const usersRouter = require('./routes/usersRouter');
const productRouter = require('./routes/productRouter');




app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use("/owner", ownerRouter);
app.use("/users",usersRouter);
app.use("/products",productRouter);




app.get('/', (req, res) => {
    res.send('Hello, World!');
})




app.listen(3000)