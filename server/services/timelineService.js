var httpService = require('./httpService');
var smsService = require('./smsService');
var app = httpService.app;

console.log("[TIMELINE_SERVICE] ==== STARTING ====");


var toto = [
	{
		type:"exam_biologie",
		title:"Prise de sang",
		date:"J-15",
		conseils:"Emmener l'ordonnance",
		localisation:"",
		contact:""
	},
	{
		type:"rdv_medic",
		title:"Consultation Anesthésie",
		date:"J-10",
		conseils:"Emmener résultats prise de sang",
		localisation:"",
		contact:""
	},

	{
		type:"rdv_medic",
		title:"Préadmission",
		date:"J-1",
		conseils:"Emmener carte nationale d'identité et carte vitale",
		localisation:"",
		contact:""
	},

	{
		type:"prep_soap_shower",
		title:"Douche",
		date:"J-0",
		conseils:"Douche savon standard",
		localisation:"",
		contact:""
	},
	{
		type:"empty_stomac",
		title:"A jeun",
		date:"J-0 6H",
		conseils:"Pas de tabac, pas d'alcool, pas de nourriture",
		localisation:"",
		contact:""
	},
	{
		type:"prep_beta_shower",
		title:"Douche et shampoing Bétadine",
		date:"J-0 10H",
		conseils:"Pas de tabac, pas d'alcool, pas de nourriture",
		localisation:"",
		contact:""
	},
	{
		type:"intervention",
		title:"Intervention cataracte",
		date:"J-0 15h",
		conseils:"",
		localisation:"",
		contact:""
	},
	{
		type:"exit",
		title:"Sortie",
		date:"J-0 15H",
		conseils:"",
		localisation:"",
		contact:""
	},
	{
		type:"rdv_medic",
		title:"Consultation ophtalmo controle",
		date:"J1 9H",
		conseils:"",
		localisation:"",
		contact:""
	},
	{
		type:"rdv_medic",
		title:"Consultation ophtalmo decontrole",
		date:"J+30 9H",
		conseils:"",
		localisation:"",
		contact:""
	}
];

app.get('/api/users/v1.0/timeline',  function (req, res, next) {
	res.status(200).send(toto).end();
});

app.post('api/users/v1.0/timeline',function (req, res, next) {

	var date = req.body.date;
	var intervention = req.body.intervention;

	smsService.sendSms("0689747249", "Vous avez recu une nouvelle notifications")) {
	res.status(200).send().end();
});
