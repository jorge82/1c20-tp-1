const express = require ('express')
const app= express();
const path= require('path'); 

const PORT= 8080;
const TIMEOUT= 500;



//se define la ruta de stilos para las paginas
app.use("/styles",express.static(__dirname + "/styles"));


//se define la ruta home
app.get('/', (request, response)=> {

    response.status(200).sendFile(path.join(__dirname+'/home.html'))
});


//se define la ruta ping
//Respuesta de un valor constante (rápido y de procesamiento mínimo)
app.get('/ping', (request, response)=> {

    response.status(200).send('Ping');
});

//se define la ruta Proxy
//Duerme cierto tiempo y responde (lento y de procesamiento mínimo)
app.get('/timeout', (request, response)=>{

    setTimeout(function() {
       response.status(200).send(`Respuesta proxy con espera :${TIMEOUT/1000} segundos`);
    }, TIMEOUT);
})

//se define la ruta intensiva
//Loop de cierto tiempo (lento y de alto procesamiento)
app.get('/intensivo', (request, response)=>{

    let start = new Date();

    for (;;) {
      let now = new Date();
  
      if (now - start >= TIMEOUT) {
        break;
      }
    }
  
    response.status(200).send(`Respuesta intensivo con timeout:${TIMEOUT/1000} segundos`);
  
})

app.listen(PORT, ()=> { 
    console.log (`Servidor corriendo en : http://localhost:${PORT}/`);
    
});




