var $trout = $('.trout');

var troutElements = $trout.contents().not('text');

var length = troutElements.length;
var delayAmount = 0;
var x = 0;
var y = 0;

function wiggle(){
    TweenLite.fromTo($trout, 0.5, {x: "-=5"}, {x: "+=5", ease:RoughEase.ease.config({strength:15, points:7, template:Linear.easeNone, randomize:false}) , clearProps:"x"});
}

// Bring in each element from either side
troutElements.each(function( index ) {
    // x = Math.cos(index/length*Math.PI*2)*9000;
    // y = Math.sin(index/length*Math.PI*2)*9000;
    x = 900; // Remove for circle effect
    // y = 900;
    x = x + "px";
    y = y + "px";
    // Last case
    if ( index === ( length - 1 ) ) {
        x = "-=" + x;
        y = "-=" + y;
        TweenLite.from( $( this ), 1, {x: x, ease: Bounce.easeIn, delay: delayAmount, onComplete: wiggle});
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

