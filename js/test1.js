// the function takes in two argument, a callback function (callback) and a time interval (interval). 
// it should call the function every interval miliseconds. the counter receives the parameter and should
// return true if the timer continues operating or false if the timer should stop operating. interval milliseconds after the timer
// has started, the callback should be called for the first time. the first time the timer is called, the callback should equal
// one. the second time it should equal two and so on. the timer should allow other code to be executed during wait time and multiple
// timers should be allowed to coexist

function startTimer(callback, interval) {
  // Write the code that goes here
  let counter = 1
  const timer = setInterval(() => {
    if(callback(counter)){
        counter++
    }else{
        clearInterval(timer)
    }
  }, interval)

}

function callback(counter) {
  console.log(counter);
  return counter < 5;
}

// Expected: 1, 2, 3, 4, 5 with 50ms interval.
startTimer(callback, 50);