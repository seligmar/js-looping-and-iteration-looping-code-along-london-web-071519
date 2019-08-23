

// Code your solutions in this file



function writeCards( namesArray1, event ) {
    let notes = []
    for ( let i = 0; i < namesArray1.length; i++ ) {
      notes.push( `Thank you, ${namesArray1[i]}, for the wonderful ${event} gift!` )
    }
    return notes
  }
  
  function countdown(n) {
    while ( n > 0) { 
        console.log(n);
     n -= 1  }
    console.log(n);
  }
  