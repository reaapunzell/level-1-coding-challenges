function longest (string) {
    var size = 0;
    var max = [' '];
    
  for (var i = 0; i < string.length; i++){
      if(string[i].length >= size) {
        size = string[i].length;
        if (max[max.length-1].length < string[i].length){
            max = [];
            max.push(string[i])
        }else {
        max = [...max, string[i]];
    }
  } 
}
console.long([...max]);
}; module.exports = { task6 };
