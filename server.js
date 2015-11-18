// npm install express http socket.io net path python-shell

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var net = require('net');
var path = require('path');
var PythonShell = require('python-shell');

var sys = require('util');
var exec = require('child_process').exec;

// traditional variables
var emfreaderstatus = false;

// start the emf reader process and setup listeners
function startEmfReader (){
  if (emfreaderstatus === false) {
    emfreaderstatus = true;

    console.log('EMF Reader\tStarting');

    var shell = new PythonShell('./py/server.py', { mode: 'text',pythonOptions: ['-u'] });

    shell.on('message', function (msg) {
      io.emit('update',msg.toString());
    });

    shell.end(function (err) {
      if (err) { console.log('EMF Reader:\t' + err); }
      console.log('EMF Reader:\tShutdown');
      emfreaderstatus = false;
    }); 
  } else {
    console.log('EMF Reader:\tAlready running');
  }
}

app.use('/css', express.static('./css'));
app.use('/js', express.static('./js'));
app.use('/assets', express.static('./assets'));

app.get('/', function(req, res){
  res.sendFile(path.resolve('./index.html'));
});

// Get status of emf reader (server.py)
app.get('/status-emf', function(req, res) {
    res.send( emfreaderstatus );
});

app.get('/restart-emf', function(req, res) {
  var response = '';
  if (emfreaderstatus === true) {
    response = 'EMF Reader is already running';
  } else {
    response = 'Attempting to restart EMF reader';
  }
  startEmfReader();
  res.send(response);
});

app.get('/reboot', function(req, res) {
  res.send('Rebooting');
  exec('shutdown -h now', function (error, stdout, stderr) {
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
});

app.get('/shutdown', function(req, res) {
  res.send('Shutting Down');
  exec("shutdown -h now");
});

io.on('connection', function(socket){
  console.log('IO:\t\tA user connected');
});

http.listen(3000, function(){
  console.log('Server:\t\tlistening on localhost:3000');
  startEmfReader();
});