---
layout: post
title:  "Intro to paper.js"
date:   2018-06-01 11:38:56 -0400
categories: coding
---


<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-core.min.js"></script>

<script type="text/paperscript" canvas="myCanvas">
	// Create a Paper.js Path to draw a line into it:
	var path = new Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	var start = new Point(100, 100);
	// Move to start and draw a line from there
	path.moveTo(start);
	// Note the plus operator on Point objects.
	// PaperScript does that for us, and much more!
	path.lineTo(start + [ 100, -50 ]);
</script>

<canvas id="myCanvas" resize></canvas>
