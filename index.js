// let roomba;
// let cleanTile = []
// let dirtyTile = 250;
// let charge = 1000;


// // counters
// let points = 0;

// let dirtyTileCount = 0;

// let totalMoves;

let battery = 1000, dirtyTilePoints = 250, movingPoints = 10, currentPoint = 0;

 floor = 
            [{tile1:"clean"}, {tile2:'clean'},{tile3:'dirty'}, {tile4:'clean'}, {tile5:'dirty'}, {tile6:"dirty"}, {tile7:'clean'},{tile8:'clean'}]
            // ["clean", 'clean','dirty', 'clean', 'clean', "clean", 'clean','dirty'],
            // ["clean", 'clean','dirty', 'clean', 'clean', "clean", 'clean','dirty'],
            // ["clean", 'clean','dirty', 'dirty', 'clean', "clean", 'clean','dirty'],
            // ["clean", 'clean','dirty', 'clean', 'clean', "clean", 'clean','dirty'],
            // ["clean", 'clean','dirty', 'clean', 'clean', "clean", 'clean','dirty'],
            // ["clean", 'clean','dirty', 'clean', 'clean', "clean", 'clean','dirty'],
            // ["clean", 'clean','clean', 'clean', 'dirty', "clean", 'clean','dirty']
        
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;

  }
  
function update( clean)







  // Used like so
  
  shuffle(floor);
  console.log(floor);
