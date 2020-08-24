---
layout: post
title:  CV & AI Based TicTacToe
date:   2020-07-30 01:11:58 +0800
image:  CV_AI.jpg
tags:   [Artificial Inteligence,Computer Vision]
---
Playing TicTacToe is fun, but whats more fun is playing it with computer on the wall begind you by simply pointing your finger.<br>
** This is made from scratch without using any detection API.
<br>
We begin by taking the webcam feed and process each frame and process each frame and display a grid on it. The a 5 seconds time wndow is given for the user to point to a block where he wishes to make a move.At the end of 5 seconds we extract the grid block images and process them to extract contours.As the wall behind is plain. The only image with contours (starting from position 1) will be with the one with the finger.In order to get the contours right, we have to set a threshold range so that the lighting conditions dont give undesired contours.
<br>
Project link: <a href="https://github.com/sharma-anubhav/CV_AI_TicTacToe">Github</a>


