const express = require('express');
const routerApi = require('./routes');

const { logError, errorHandler } = require('./middlewares/error.handle');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', ( req, res ) => {
  res.send( 'Hello my express server' );
});

app.get( '/new-route' , ( req, res ) => {
  res.send('Hello from new route' );
});

routerApi(app);

//middlewares
app.use( logError );
app.use( errorHandler );

app.listen(port, () => {
  console.log( 'My port ' + port )
});
