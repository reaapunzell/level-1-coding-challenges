function combine (arr1, arr2){
    var result = [];

    for ( var i = 0; i < arr1.length || i < arr2.length; i++){
      if ( i < arr1.length){
       result.push(arr1[i]);
      } if (i < arr2.length){
        result.push(arr2[i]);
      }
    }
    return result; 
};   module.exports = { task7 };
