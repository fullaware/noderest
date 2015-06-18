var restify = require('restify'); 
var fs = require('fs'); 
var path = 'test.csv'; 
 
function respond(req, res, next) { 
  res.send('hello ' + req.params.sensorvar); 
  next(); 
// Writes namevar to test.txt and sends line 
  fs.appendFile(path, req.params.sensorvar + '\r\n', function(error) { 
     if (error) { 
       console.error('write error:  ' + error.message); 
     } else { 
       console.log('Successful write ' + req.params.sensorvar + 'to ' + path); 
     } 
}); 
} 
 
var server = restify.createServer(); 
server.get('/log/:sensorvar', respond); 
server.head('/log/:sensorvar', respond); 

server.listen(8080, function() { 
  console.log('%s listening at %s', server.sensorvar, server.url); 
});
