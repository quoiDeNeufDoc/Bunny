module.exports = 
{
	'db': {
		'url': 'mongodb://127.0.0.1/quoiDeNeufDoc' 
	},
	
	'http': { 
		'port': 8080,
		'allowedOrigins': [ 'http://localhost:80', 'https://localhost:80', 'http://169.254.127.165:9000', 'http://169.254.127.166:9000', 'http://169.254.127.166', 'http://localhost:9000', "http://192.168.43.177:9000"]
	},
	'emailServer':
	{
		service: 'Gmail',
		auth: { user: 'quoideneuf.ned@gmail.com', pass: 'C@rotte67' }
	}
};