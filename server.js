// server.js
const express = require('express');

// Define Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Serve Static Assets
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/imges'));
app.use(express.json());



app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});

app.get('/home', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
    res.sendFile('./public/styles.css', { root: __dirname });
    res.sendFile('./public/script.js', { root: __dirname });
    res.sendFile('./public/cactus.js', { root: __dirname });
    res.sendFile('./public/dino.js', { root: __dirname });
    res.sendFile('./public/ground.js', { root: __dirname });
    res.sendFile('./public/updateCustomProperty.js', { root: __dirname });
    //response.end();
    //app.use('/images', express.static('path/to/images'))

});
// http://127.0.0.1:8080/updete?jump=true
app.get('/update',(req,res)=>{


    console.log("Update");     
    res.status(200);
    res.send("jumps is set to " + req.query['jump']);
    //console.log(req);
    console.log(req.query['jump']);
})
//:name

app.get('/name/:name',(req,res)=>{


    console.log("name");     
    res.status(200);
    res.send("name is set to " +  req.params.name);
    //console.log(req);
    console.log(req.query['jump']);
})

//live at http://127.0.0.1:8080/    


/* 
const app = require('express')();
const appWs = require('express-ws')(app);

app.ws('/echo', ws => {
    ws.on('message', msg => {
        console.log('Received: ', msg);
        ws.send(msg);
    });
});

app.listen(1337, () => console.log('Server has been started'));
*/
