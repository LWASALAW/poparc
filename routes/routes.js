module.exports = function(express, app){
    var router = express.Router();
    
    router.get('/', function(req, res, next){
        res.render('index', {title: 'POPARC'})           
    })
    
    router.get('/login', function(req, res, next){
        res.render('login', {title: 'Login | POPARC'})
    })
    
    
	app.use('/',router);
}