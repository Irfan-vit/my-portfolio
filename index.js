const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'))
app.use(expressLayouts);
//extract induvidual stye and scripts into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//setup the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err) {
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is Running On Port : ${port}`);
});