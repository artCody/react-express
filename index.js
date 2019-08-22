const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);

require('./routes.js')(app);

app.listen(app.get('port'), ()=> console.log(`Node server started on http://localhost:${app.get('port')}`));