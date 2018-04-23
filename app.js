var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser')
    
    //using hogan-express templating engine
    app.engine('html', require('hogan-express')); 

    app.set('view engine', 'html');

    //Making use of the external files like css, js, images, etc..
    app.use(express.static(path.join(__dirname, 'public')))


    //Body Parser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    require('./routes/routes.js')(express, app)

    app.listen(9000, function(){
        console.log('Server stated on port 9000');
    })
