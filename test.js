    //global object
    //console.log(global);

   //set timeout
   //setInterval
   //__dirname
   //__filename

   //path to file import
   // const xzy = require('./people')

   //export data from a module, retern a value to the import
   //module.export = 'hello';

   //export multiple in object
   //module.export = {people, ages}
   //xyz.people, xyz.ages

   //import one of many exports

   // const {people(,ages)} = require('./people')


   //const os = require('os')


   /*read files
   const fs = require('fs');

   fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data.toString())   asyncronous
   })
   

   //writing files
   
   fs.writeFile('./doc...', 'hello world, () =>{
        console.log('file was written')
   });


   //make directories
   fs.mkdir make

   fs.exestsSync() checks if exists

   fs.rmdir remove
   */

   //deletes files
   //fs.unlink()


   // streams - starts using data before it has finished learning
   /*
   const readStream = fs.createReadStream('./'), (encoding: 'utf8' });

   readStream.on('data',(chunk)=>{
        .toString() to convert
   })

   or adding encoding peramenter so that it is already in a readable format
   
   readStream.on('data',(chunk)=>{
        .toString() to convert
   })
   writeStream.write()


   PIPES: readable stream to writable stream
    readableStream.pipe(writeStream);


   */ 