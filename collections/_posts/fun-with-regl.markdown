---
layout: post
title:  "Fun with REGL"
date:   2018-04-06 11:38:56 -0400
categories: coding
---
Playing with [Jim Vallandingham](http://vallandingham.me/regl_intro.html)'s intro to REGL.

The points x and y values are mapped to cosine and sine functions, respectively. You can click the button below to change the period of the functions within a constrained range.

<style>
    canvas {
        width: 70vw !important;
        height: 70vh !important;
        display: block !important;
        margin: auto !important;
        border: 1px solid #f00 !important;
        position: inherit !important;
    }
</style>

<div id="button">Change Period</div>
<script language="javascript" src="https://npmcdn.com/regl/dist/regl.min.js"></script>
<script src="/js/regl-periods.js"></script>
