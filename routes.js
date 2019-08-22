const main = require('./handlers/main');

module.exports = (app) => {	

	app.get('/api/title', main.title);

}