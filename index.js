const express = require('express');
const app = express();
const port = 3006;
const dust = require('adaro').dust;
const path = require('path');
const routes = require('./server/config/routes');


app.use(express.static('public', { maxAge: 0 }));
// app.use(staticAsset(path.join(__dirname, 'server/public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('dust', dust({ cache: false }));
app.set('view engine', 'dust');


// Serve those static files up bia bia
routes.getStaticRoutes(app, () => {
	app.listen(port, () => {
		console.log(`App listening on port ${port}!`)
	});
});
