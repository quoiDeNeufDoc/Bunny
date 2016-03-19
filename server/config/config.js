module.exports = 
{
	'db': {
		'url': 'mongodb://127.0.0.1/quoiDeNeufDoc' 
	},
	
	'http': { 
		'port': 8080,
		'allowedOrigins': [ 'http://localhost:80', 'https://localhost:80', 'http://localhost:9000']
	},
	'emailServer':
	{
		service: 'Gmail',
		auth: { user: 'quoideneuf.ned@gmail.com', pass: 'C@rotte67' }
	}
};