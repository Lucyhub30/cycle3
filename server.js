const http = require('http');


//Create server using http and stores it
//Callback function

//Request
const server = http.createServer((requestObj, responseObj) =>{
    console.log("Request made");
    console.log(requestObj.url, requestObj.method);

    //Set header content type
    responseObj.setHeader('Content-Type', 'text/plain');

    responseObj.write("HELLO WORLD!!!!!! :)");

    responseObj.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
}); //Listen at 3000 post number

//Response headers


 