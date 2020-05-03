const express = require ('express')
const app= express();
const path= require('path'); 

const PORT= 8080;
const TIEMPO_ESPERA_PROXY= 3000;
const MAXIMO_LOOP_INTENSIVO= 100000;


//se define la ruta de stilos para las paginas
app.use("/styles",express.static(__dirname + "/styles"));


//se define la ruta home
app.get('/', (request, response)=> {

    response.sendFile(path.join(__dirname+'/home.html'))
});


//se define la ruta ping
//Respuesta de un valor constante (rápido y de procesamiento mínimo)
app.get('/ping', (request, response)=> {

        response.send('Ping');
});

//se define la ruta Proxy
//Duerme cierto tiempo y responde (lento y de procesamiento mínimo)
app.get('/proxy', (request, response)=>{

    setTimeout(function() {
       response.send(`Respuesta proxy con espera :${TIEMPO_ESPERA_PROXY} segundos`);
    }, TIEMPO_ESPERA_PROXY);
})

//se define la ruta intensiva
//Loop de cierto tiempo (lento y de alto procesamiento)
app.get('/intensivo', (request, response)=>{

       loop(MAXIMO_LOOP_INTENSIVO);
       response.send(`Respuesta intensivo con loop de :${MAXIMO_LOOP_INTENSIVO **2} iteraciones`);
  
})

app.listen(PORT, ()=> { 
    console.log (`Servidor corriendo en : http://localhost:${PORT}/`);
    
});



function loop(max){
    console.log('incio')

  
        let i;
        let j;
        let x;
    for( i= 0;i < max;i++)
        for( j= 0; j<max;j++){
            x=i*j;

     
         

        }
    
     console.log('fin')
      
}


