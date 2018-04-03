
var regl = createREGL()


// Helper function to create a random float between
// some defined range. This is used to create some
// fake data. In a real setting, you would probably
// use D3 to map data to display coordinates.
function randomFromInterval(min, max) {
  return Math.random() * (max - min + 1) + min;
}

// Helper function to create a random integer between
// some defined range. Again, you would want to use
// D3 for mapping real data to display coordinates.
function randomIntFromInterval(min, max) {
  return Math.floor(randomFromInterval(min, max));
}

// Some constants to use
var MAX_WIDTH       = 2000;
var MAX_HEIGHT      = 800;
var MAX_SPEED       = 25;
var POINT_SIZE      = 10;
var POINT_COUNT     = 400;
var X_START         = 100;
var PED_SPEED       = 5;
var CAR_SPEED       = 10;

window.onload = function() {
    document.getElementById("button").onclick = function fun() {
        PED_SPEED = 100;
    }
}

// Helper function to generate some fake data.
// Each data point has an x and y and a 'speed'
// value that indicates how fast it travels
function createData(dataCount) {
  var data = [];
  for(var i = 0; i < dataCount; i++) {
    var datum = {
      id: i,
      speed: randomFromInterval(1, PED_SPEED),
      y: randomIntFromInterval(POINT_SIZE, 700),
      x: X_START,
      size: randomIntFromInterval(POINT_SIZE, POINT_SIZE * 2),
    };

    data.push(datum);
  }
  return data;
}

// Helper function, goes through each
// element in the fake data and updates
// its x position.
function updateData(data) {
  data.forEach(function(datum) {
    datum.x += datum.speed
    // reset x if its gone past max width
    datum.x = datum.x > MAX_WIDTH ? X_START : datum.x;
  });
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

  // helper function to transform from pixel space to normalized
  // device coordinates (NDC). In NDC (0,0) is the middle,
  // (-1, 1) is the top left and (1, -1) is the bottom right.
  // Stolen from Peter Beshai's great blog post:
  // http://peterbeshai.com/beautifully-animate-points-with-webgl-and-regl.html
  vec2 normalizeCoords(vec2 position) {
    // read in the positions into x and y vars
    float x = position[0];
    float y = position[1];

    return vec2(
      2.0 * ((x / stageWidth) - 0.5),
      // invert y to treat [0,0] as bottom left in pixel space
      -(2.0 * ((y / stageHeight) - 0.5)));
  }

  void main () {
    gl_PointSize = pointWidth;
    gl_Position = vec4(normalizeCoords(position), 0, 1);
  }`,

  attributes: {
    // There will be a position value for each point
    // we pass in
    position: function(context, props) {
      return props.points.map(function(point) {
        return [point.x, point.y]
      });
    },
    // Now pointWidth is an attribute, as each
    // point will have a different size.
    pointWidth: function(context, props) {
      return  props.points.map(function(point) {
        return point.size;
      });
    },
  },

  uniforms: {
    color: function(context, props) {
      // just to be a bit strange, oscillate the color a bit.
      return [Math.cos(context.tick / 100), 0.304, 1.000, 1.000];
    },
    // FYI: there is a helper method for grabbing
    // values out of the context as well.
    // These uniforms are used in our fragment shader to
    // convert our x / y values to WebGL coordinate space.
    stageWidth: regl.context('drawingBufferWidth'),
    stageHeight: regl.context('drawingBufferHeight')
  },

  count: function(context, props) {
    // set the count based on the number of points we have
    return props.points.length
  },
  primitive: 'points'

})

var points = createData(POINT_COUNT);

regl.frame(function(context) {
  // Each loop, update the data
  updateData(points);

  regl.clear({
    color: [0, 0, 0.5, 1]
});

  // And draw it!
  drawDots({
    pointWidth: POINT_SIZE,
    points: points
  });
});
  














