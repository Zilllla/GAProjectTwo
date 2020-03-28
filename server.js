
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
//dialM
const dialMController = require('./controllers/dialM.js');
app.use('/dialM', dialMController);
//northBy
const northByController = require('./controllers/northBy.js');
app.use('/northBy', northByController);
//osyco
const psychoController = require('./controllers/psycho.js');
app.use('/psycho', psychoController);
//strangers
const strangersController = require('./controllers/strangers.js');
app.use('/strangers', strangersController);
//vertigo
const vertigoController = require('./controllers/vertigo.js');
app.use('/vertigo', vertigoController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});




app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}, yo!`);
});
