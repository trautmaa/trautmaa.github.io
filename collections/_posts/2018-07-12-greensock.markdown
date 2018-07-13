---
layout: blank
title:  "Greensock"
date:   2018-07-12 11:38:56 -0400
categories: coding
publish: true
description: First steps learning Greensock
img-src: "/assets/greensock.svg"
---

{% include trout.svg %}

<style>
#troutBig, #troutSmall{
    visibility: hidden;
}

html, body {
  height: 100%;
}
body {
  background-color: #262626;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
}
.trout {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px !important;
  width:100%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"></script>


<script src="/js/greensock.js"></script>

