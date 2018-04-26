---
layout: blank
title: 
permalink: /fish/
---

<style>

svg {
    height:200px;
    display:block;
    margin:auto;
    pointer-events:all;
    padding:10px;
}

@keyframes eye {
    0%        {opacity: 0}
    15%, 70%  {opacity: 1}
    85%, 100% {opacity: 0}
}

#Eye {
    animation: eye 5s linear infinite;
}

@keyframes topfin {
    0% { -webkit-transform: rotate(0deg);
    transform:rotate(0deg); }
    30% { -webkit-transform: rotate(1deg);
    transform:rotate(0.5deg); }
    80% { -webkit-transform: rotate(-1deg);
    transform:rotate(-1deg); }
    100% { -webkit-transform: rotate(0deg);
    transform:rotate(0deg); }
}

#Top_Fin {
    animation: topfin 2s linear infinite;
}

@keyframes forearm {
    0% { -webkit-transform: rotate(0deg);
    transform:rotate(0deg); }
    25% { -webkit-transform: rotate(1deg);
    transform:rotate(1deg); }
    75% { -webkit-transform: rotate(-1deg);
    transform:rotate(-1deg); }
    100% { -webkit-transform: rotate(0deg);
    transform:rotate(0deg); }
}

#Forearm {
    animation: forearm 2s ease infinite;
}

@keyframes spot1 {
  0% {fill: #4a5853;}
  8% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot2 {
  0% {fill: #4a5853;}
  16% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot3 {
  0% {fill: #4a5853;}
  24% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot4 {
  0% {fill: #4a5853;}
  32% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot5 {
  0% {fill: #4a5853;}
  40% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot6 {
  0% {fill: #4a5853;}
  48% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot7 {
  0% {fill: #4a5853;}
  56% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot8 {
  0% {fill: #4a5853;}
  64% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot9 {
  0% {fill: #4a5853;}
  72% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

@keyframes spot10 {
  0% {fill: #4a5853;}
  80% {fill: #32C2A2;}
  100% {fill: #4a5853;}
}

#Spot1 path{  animation: spot1 5s infinite; }
#Spot2 path{  animation: spot2 5s infinite; }
#Spot3 path{  animation: spot3 5s infinite; }
#Spot4 path{  animation: spot4 5s infinite; }
#Spot5 path{  animation: spot5 5s infinite; }
#Spot6 path{  animation: spot6 5s infinite; }
#Spot7 path{  animation: spot7 5s infinite; }
#Spot8 path{  animation: spot8 5s infinite; }
#Spot9 path{  animation: spot9 5s infinite; }
#Spot10 path{ animation: spot10 5s infinite; }

</style>

{% include trout.svg %}

