const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const routes = require("./routes")


const app = express();

//conexão com o server
mongoose.connect('mongodb+srv://Coltech:123@coltech-6g29n.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname , '..','Uploads')));
app.use(routes);

app.listen(3333);