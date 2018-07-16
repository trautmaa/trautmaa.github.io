// var $trout = $('.trout');

// var troutElements = $trout.contents().not('text');

// var length = troutElements.length;
// var delayAmount = 0;
// var x = 0;
// var y = 0;

// function wiggle(){
//     TweenLite.fromTo($trout, 0.5, {x: "-=5"}, {x: "+=5", ease:RoughEase.ease.config({strength:15, points:7, template:Linear.easeNone, randomize:false}) , clearProps:"x"});
// }

var $flying = $('#Flying');
var $standing = $('#Standing');
var $post = $('#Post');

var documentWidth = $( document ).width();

var xBeginning = 1.3 * (documentWidth / 2) + "";
var xDestination = "0";

// $standing.toggle();
$post.toggle();

var tl = new TimelineLite();

// TweenLite.to( $standing, 0.0, {x: "0" } );
TweenLite.to( $post, 0.0, {left:0 } );

// TweenLite.fromTo( $flying, 3.0, {x: xBeginning, y: "-200"}, {x: xDestination, y: "200"});

tl.to ($flying, 1.0, {rotation: -10})
.to ($flying, 1.0, {rotation: 10})
.to ($flying, 1.0, {rotation: -10})
.to ($flying, 1.0, {rotation: 10});

var path = [{x: documentWidth, y:0}, {x: .9 * documentWidth, y:100}, {x: .8 * documentWidth, y:-100}];

TweenLite.from( $flying, 5, {bezier:path, ease:Bounce.easeNone})

// TweenLite.from( $standing, 5, {bezier:{type:"thru", values: path, autoRotate:["x","y","rotation", 0, true]}, ease:Power1.easeInOut});