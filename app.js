const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'html');
//app.use( express.static('public') );

app.use('/static', express.static( path.join(__dirname, '/public') ) );

app.get('/', ( req, res, err ) => { res.send('<p>Hello : )</p>') } )
app.listen(8080, () => console.log('Example app listening on port 8080!'));



module.exports = app;
