function triangle (num) {
    if ( num >= 0){
    for ( var i = 0; i <= num; i ++){
        var positiveTri = "#".repeat(i);
        console.log(positiveTri);
    }
} else if ( num < 0 ) {
    var positiveNum = num * -1
    for ( var i = positiveNum; i >= 1; i -- ){
        var negativeTri = "#".repeat(i);
        console.log(negativeTri);
    }
    }
};

module.exports = { task5 };
