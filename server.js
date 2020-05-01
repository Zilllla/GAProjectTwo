
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;
const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

// Connect to Mongo
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log('Connection made!');
});


//CONTROLLERS
//osyco
const psychoController = require('./controllers/psycho.js');
app.use('/psycho', psychoController);


app.get('/', (req, res) => {
  res.render('index.ejs');
});




app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}, yo!`);
});
