var app = require('express')();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render("home", {isCakeDay: isCakeDay()})
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server running on port "+port+"..")
})

function isCakeDay() {
	return new Date().getDate();
}