// Need to install progress using npm
const ProgressBar = require('progress')

console.log('Starting')

// create a progress bar in the console
// creates a 20-step progress bar, and every 100ms 
// one step is completed. When the bar completes we 
// clear the interval
const bar = new ProgressBar(':bar', { total: 20 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)