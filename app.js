var app = require('express')();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render("home", {isCakeDay: isCakeDay()})
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server running on port "+port+"..")
})

var primeDays = [2, 3, 5, 7, 11, 13, 17, 19, 23, 27, 29, 31];
var perfectSquares = [4, 9, 25]
var perfectCubics = [8, 27]

function isCakeDay() {
	var day =  new Date().getDate()
	if (primeDays.includes(day)) return "SIIM! É dia de bolo! Porque hoje é dia primo!"
	if (perfectSquares.includes(day)) return "SIM! É dia de bolo!! Porque hoje é quadrado perfeito!"
	if (perfectCubics.includes(day)) return "Siim! É dia de BOLO! Porque hoje é dia CUBO perfeito!!"
	if (perfectSquares.includes(day-1)) return "SIM! É dia de bolo!! Porque hoje é quadrado perfeito +1 !"
	if (perfectCubics.includes(day-1)) return "Siim! É dia de BOLO! Porque hoje é dia CUBO perfeito +1 !!"
	if (day == 1) return "SIM! hoje não é primo, mas me fala se tem jeito melhor de começar o mês?"
	if (day == 6) return "hoje não é primo... mas bem que SEIS deviam comer um bolo... :troll:"

	return "nao eh =/         Mas podia ser.... :cake:"
}