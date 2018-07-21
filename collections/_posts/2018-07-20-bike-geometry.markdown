---
layout: blank
title:  "Bike Geometry"
date:   2018-07-20 01:38:56 -0400
categories: coding
publish: true
description: "Bike Geometry Display Tool"
img-src: "/assets/react.png"
---

<div id="container">
	<canvas id="myCanvas" width="1000" height="600"></canvas>
</div>
<style>
#container {
	width: 1000;
	height: 600;
	border: 2px solid black;
    display: inline-block;
    margin: auto;
}
#myCanvas {
    background: white;
}
</style>

<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.3/math.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-core.min.js"></script>
<script src="/js/bike-geometry.js" ></script>
