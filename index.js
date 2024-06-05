const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const path = require("path");
dotenv.config()
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
