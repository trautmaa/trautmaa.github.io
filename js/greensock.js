var $b = $('.trout');

function wiggle(){
    TweenLite.fromTo($b, 0.5, {x: "-=5"}, {x: "+=5", ease:RoughEase.ease.config({strength:15, points:7, template:Linear.easeNone, randomize:false}) , clearProps:"x"});
}



var gSet = $( ".trout" ).contents().not('text');
var gSet2 = $( ".trout" ).children();

console.log(gSet);
// console.log(gSet2);

var length = gSet.length;
var delayAmount = 0;

var x = 0;
var y = 0;

gSet.each(function( index ) {
    x = Math.cos(index/length*Math.PI*2)*9000;
    y = Math.sin(index/length*Math.PI*2)*9000;
    x = 900; // Remove for circle effect
    x = x + "px";
    y = y + "px";
    console.log(x)
    // Last case
    if ( index === ( length - 1 ) ) {
        x = "-=" + x;
        y = "-=" + y;
        TweenLite.from( $( this ), 1, {x: x, y: y, ease: Bounce.easeIn, delay: delayAmount, onComplete: wiggle});
    }
    else if ( index % 2 == 0){ // Even
        x = "-=" + x;
        y = "-=" + y;  
        TweenLite.from( $( this ), 1, {x: x, ease: Bounce.easeIn, delay: delayAmount}); // Add y for circle effect
    } 
    else { // Odd
        x = "+=" + x;
        y = "+=" + y;
        TweenLite.from( $( this ), 1, {x: x, ease: Bounce.easeIn, delay: delayAmount}); // Add y for circle effect
    }
    delayAmount += 0.05;
  });

