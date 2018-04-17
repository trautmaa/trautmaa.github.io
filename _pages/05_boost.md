---
layout: blank
title: 
permalink: /boost/
---
<div class="boost-container">
    <div class="boost-qualifications image"></div>
    <div class="boost-key image"></div>
    <div class="boost-mask image"></div>
</div>



<style>
    .boost-container{
        position:relative;
    }
    .image{
        position:absolute;
        width:850px;
        height:583px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        top:10px;
        margin-bottom:10px;
        border-radius:15px;
    }
    .boost-qualifications{
        background: url("/assets/boost.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .boost-key{
        background: url("/assets/boostkey.png");
        background-size: 100%;
        background-repeat: no-repeat;
        opacity:1;
    }
    .boost-mask{
        background: url("/assets/boostmask.png");
        background-size: 100%;
        background-repeat: no-repeat;
        opacity:0;
    }
    .boost-mask:hover { 
        opacity:1.0;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }
</style>