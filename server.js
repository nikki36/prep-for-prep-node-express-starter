var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

// create a new instance of an express app
var app = express()

// set up EJS
app.set('view engine', 'ejs')   //behind the scenes, requires ejs
// allows us to put css and images and stuff inside views folder
app.use(express.static('views'))
// tell app where to find views folder
app.set('views', __dirname + '/views')

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.get('/profile', function(request, response){
    response.render('profile.ejs')
})

var port = process.env.PORT

app.listen(port, function(){
    console.log(`App running on ${port} hamsters.`)
})