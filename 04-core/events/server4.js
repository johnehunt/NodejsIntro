console.log('Starting Up')

process.on('exit', function(code) {
    console.log('About to exit with code:', code);
 });
 
 console.log("Program Ended");