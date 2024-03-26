/*
Write a higher-order function loop that provides something like a for
loop statement. It should take a value, a test function, an update function,
and a body function. Each iteration, it should first run the test function on
the current loop value and stop if that returns false. It should then call the
body function, giving it the current value, then finally call the update function
to create a new value and start over from the beginning.
*/

// loop(value, test-fn, update-fn, body-fn)
// loop(3, n => n > 0, n => n - 1, console.log)

function loop(v, testFn, updateFn, bodyFn) {
  while(testFn(v)) {
    bodyFn(v);
    v = updateFn(v);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
