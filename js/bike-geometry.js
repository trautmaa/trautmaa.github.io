function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

var canvas = document.getElementById("myCanvas");


var a = 460, // Chainstay
    b = 560, // Seat tube
    c = 564.5, // Top tube
    d = 152, // Head tube
    e = 390, // Fork length
    f = 78, // BB Bottom bracket drop
    g = 1055.6, // Wheelbase
    h = 0, // 
    i = 389.3, // Reach
    s = 588, // Stack
    t = 45; // Fork offset

var constantsArray = [
    a, b, c, d, e, f, g, h, i, s, t
];

// Scale our constants to the canvas using wheelbase as maximum
height = canvas.height;
width = canvas.width;
scale = width / g;

// Apply the scale
([a, b, c, d, e, f, g, h, i, s, t] = [a, b, c, d, e, f, g, h, i, s, t].map(v => v * scale));


// var a = constantsArray[0], // Chainstay
//     b = constantsArray[1], // Seat tube
//     c = constantsArray[2], // Top tube
//     d = constantsArray[3], // Head tube
//     e = constantsArray[4], // Fork length
//     f = constantsArray[5], // BB Bottom bracket drop
//     g = constantsArray[6], // Wheelbase
//     h = constantsArray[7], // 
//     i = constantsArray[8], // Reach
//     s = constantsArray[9]; // Stack

console.log(constantsArray[0], a)

// Now the rest of the variables should be defined on this same scale
var y = toRadians(72), // Head tube angle
    x = toRadians(73), // Seat tube angle
    z = Math.PI - x; // 
    v = Math.PI / 2 - x, //
    j = f / Math.sin(x), //
    n = b - j, //
    w = Math.asin( j * Math.sin(z) / a), // Should be in radians
    u = Math.PI - w - z,
    k = a * Math.sin(u) / Math.sin(z), //
    p = n * Math.sin(v), //
    h = Math.sqrt(n**2 - p**2) //
    m = math.sqrt( k**2 + n**2 - 2 * k * n * Math.cos(x) ), //
    q = k - p, //
    r = math.sqrt(j**2 - f**2), // 
    beta = math.sqrt(b**2 + s**2 - 2 * b * s * Math.cos(v)),
    psi = Math.asin(s * Math.sin(v) / beta),
    phi = Math.atan(i/s),
    aa = Math.PI / 2 - y,
    ab = t / Math.sin(y),
    ac = Math.PI - y,
    ad = Math.asin(Math.sin(ac) * ab / e),
    ae = Math.PI - ad - ac,
    af = e * Math.sin(ae) / Math.sin(ac),
    ag = Math.sin(y) * af,
    ah = Math.cos(y) * af;


console.log("r", r)

paper.install(window);
paper.setup(canvas);


point1 = new Point(0, height-f);
point2 = new Point(k, height-f);
point3 = new Point(k + r, height-0);
point4 = new Point(q, height-(f + h));
pointFloating = new Point(point3.x, -height);
point5 = new Point(k + r + i, height-(s));
point6 = new Point(g, height-f);
point7 = new Point(g - ab - ah, height- (f + ag) );

var circle1 = new Path.Circle(point1, 5);
var circle2 = new Path.Circle(point2, 5);
var circle3 = new Path.Circle(point3, 5);
var circle4 = new Path.Circle(point4, 5);
var circle5 = new Path.Circle(point5, 5);
var circle6 = new Path.Circle(point6, 5);
var circle7 = new Path.Circle(point7, 5);

circle1.fillColor = 'black';
circle2.fillColor = 'black';
circle3.fillColor = 'black';
circle4.fillColor = 'black';
circle5.fillColor = 'black';
circle6.fillColor = 'black';
circle7.fillColor = 'black';

var rhoLine = new Path.Line(point3, pointFloating);
rhoLine.rotate(toDegrees(phi), point3);
rhoLine.strokeColor = 'black';

headtubePath = new Path.Line(point5, point7);
headtubePath.strokeColor = 'black';

chainstayPath = new Path.Line(point1, point3);
seatTubePath = new Path.Line(point4, point3);
toptubePath = new Path.Line(point4, point5);
downtubePath = new Path.Line(point7, point3);
seatstayPath = new Path.Line(point1, point4);
forkPath = new Path.Line(point7, point6);
chainstayPath.strokeColor = 'black';
seatTubePath.strokeColor = 'black';
toptubePath.strokeColor = 'black';
downtubePath.strokeColor = 'black';
seatstayPath.strokeColor = 'black';
forkPath.strokeColor = 'black';




// var aPath = new Path();
// aPath.add(point1);
// aPath.add(point2);
// aPath.add(point3);
// aPath.add(point4);
// aPath.fullySelected = 'true';
// aPath.closed = true;
