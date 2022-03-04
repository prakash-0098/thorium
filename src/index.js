const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const moment = require('moment'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://prakash:MD8GREj5x0NTptFX@cluster0.fg71d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(function(request, response, next){
    const logs = moment().format()+", "+request.socket.remoteAddress+", "+request.url; 
    console.log(logs); 
    next();
}); 

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
