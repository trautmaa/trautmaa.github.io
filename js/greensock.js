///////////////////////
// Replay
// var $replay = $('.replay-arrow');

// Spins the replay button one time
// function spin(){
//     TweenLite.fromTo( $replay, 2, {rotation: 0}, {rotation: 360});
//     console.log("spin called")
// }


// function reveal(){
//     TweenLite.from( $replay, 2, { autoAlpha:0 } );
// }

// function hide(){
//     TweenLite.to( $replay, 2, { autoAlpha:0 } );
// }

// Create event to watch for someone hovering over replay button
// $replay.hover(
//     function() {
//         console.log("in hover")
//         spin();
//     }, function() {
//     }
//   );

// Replay fish animation on click
// $replay.click(function() {
//     play();
//     hide();
// });

///////////////////////
// Trout
var $trout = $('.trout');
var troutElements = $trout.contents().not('text');
var length = troutElements.length;


function play(){

    var delayAmount = 0;
    var x = 0;
    var y = 0;

    // Bring in each element from either side
    troutElements.each(function( index ) {
        // x = Math.cos(index/length*Math.PI*2)*9000;
        // y = Math.sin(index/length*Math.PI*2)*9000;
        x = 9999; // Remove for circle effect
        y = 0;
        x = x + "px";
        y = y + "px";

        // Last case
        if ( index === ( length - 1 ) ) {
            x = "-=" + x;
            y = "-=" + y;
            TweenLite.from( $( this ), 1, {x: x, y: y, ease: Bounce.easeIn, delay: delayAmount});
        }
        else if ( index % 2 == 0){ // Even
            x = "-=" + x;
            y = "-=" + y;  
            TweenLite.from( $( this ), 1, {x: x, y: y, ease: Bounce.easeIn, delay: delayAmount}); // Add y for circle effect
        } 
        else { // Odd
            x = "+=" + x;
            y = "+=" + y;
            TweenLite.from( $( this ), 1, {x: x, y: y, ease: Bounce.easeIn, delay: delayAmount}); // Add y for circle effect
        }
        delayAmount += 0.05;
    });
}
play();





// function wiggle(){
//     TweenLite.fromTo($trout, 0.5, {x: "-=5"}, {x: "+=5", ease:RoughEase.ease.config({strength:15, points:7, template:Linear.easeNone, randomize:false}) , clearProps:"x"});
// }

