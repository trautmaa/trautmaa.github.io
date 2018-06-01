var regl = createREGL()


function randomFromRange(low, high) {
  return Math.random() * (high - low) + low;
}

var X_START = 0.0;
var Y_START = 0.0;
var POINT_COUNT = 300;
var MAX_VARIANCE = 10
var FLAG = false;
var POINT_SIZE = 10;


function createData(dataCount) {
    var data = [];
    for(var i = 0; i < dataCount; i++){
        var datum = {
            id: i,
            size: randomFromRange(POINT_SIZE, POINT_SIZE * 1.2),
            x: X_START,
            y: Y_START,
            variance: randomFromRange(0, MAX_VARIANCE),
            periodx: 1,
            periody: 1,
            needsreset: false,
            tickreset: 0
        };
        data.push(datum);
    }
    return data;
}

function updateData(data, tick) {
  data.forEach(function(datum) {

        // Set tickreset to current tick: send point back to zero
        if ( datum.needsreset ){
          datum.tickreset = tick;
          datum.needsreset = false;
        }
        
        // Set point coordinates
        datum.x = Math.cos( (tick - datum.tickreset) / (datum.periodx * 25 + datum.variance));
        datum.y = Math.sin( (tick - datum.tickreset) / (datum.periody * 25 + datum.variance));
    })
}

const drawDots = regl({

  frag: `
  precision mediump float;
  uniform vec4 color;
  void main () {
    gl_FragColor = color;
  }`,

  vert: `
  precision mediump float;
  attribute vec2 position;
  attribute float pointWidth;

  uniform float stageWidth;
  uniform float stageHeight;

  void main () {
    // @change Set gl_PointSize global to
    //  configure point size
    gl_PointSize = pointWidth;
    gl_Position = vec4(position, 0, 1);
  }`,

  // Attributes are only available to the vertex shader
  attributes: {
    position: function(context, props) {
      return props.points.map(function(point) {
        return [point.x, point.y]
      });
    },
    pointWidth: function(context, props) {
      return  props.points.map(function(point) {
        return point.size;
      });
    },
  },

  // These don't get changed within a frame, only between
  // They get send to both the vert and frag shaders
  uniforms: {
    color: function(context, props) {
      return [Math.cos(context.tick / 100), 0.304, 1.000, 1.000];
    },
    // @change: Add a pointWidth uniform -
    //  set by a prop
  },

  count: function(context, props) {
    return props.points.length
  },
  // @change: Set our primitive to points
  primitive: 'points'

})

var points = createData(POINT_COUNT);

// Change period on button click
document.getElementById("changePeriod").onclick = function(){
  var xTweak = randomFromRange(1,3);
  var yTweak = randomFromRange(1,3);
  points.forEach(function(datum) {
      datum.periodx = xTweak;
      datum.periody = yTweak;
  })
}

// Regroup points
document.getElementById("regroup").onclick = function( context ){
  points.forEach(function(datum) {
    datum.needsreset = true; // Set reset flag
  })
}

regl.frame(function( context ) {

  updateData(points, context.tick);

  drawDots({
    color: [0.208, 0.304, 1.000, 1.000],
    // @change: Pass in the pointWidth prop
    pointWidth: POINT_SIZE,
    points: points
  });
  
});