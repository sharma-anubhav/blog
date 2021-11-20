---
layout: post
title:  T.A.R.S. - Totally awesome response system
date:   2021-11-19 01:11:58 +0800
image:  assistant.gif
tags:   [Python, Application, Artificial Inteligence]
---
Inspired by Iron Man's personal AI assistant.
On windows machines, we are stuck with cortana which uses BING search engine, which frankly many people dont like.<br>
T.A.R.S. is a fully automated Virtual Assistant (Voice operated) that uses google search engine to provide you with the most accurate and relevant results suited to your requirements.<br>


## Functionalities 
The assistant provides you with most of assistant functionalities like: 
* Notes
* Weather
* Informnation searching
* Controls such as launching apps, brightness controls, power controls
* Search the web for specific categories like Web/Video/News/Shopping.<br>

![alt text](https://github.com/sharma-anubhav/T.A.R.S./blob/master/T.A.R.png?raw=true)

## Overview and technologies used
The Assistant Features a modern user interface which is built using *HTML & CSS* as front-end and python managing the back-end processing. This is acheived through a dependancy *Eel* to integrate python with HTML.<br>

The searching uses *Beautiful soup* to *scrape* the desired type of results from google. Subprocess commands are used to control the os level features like launching apps, power and brightness controls.<br>
API's are used to fetch informnation from Wikipedia and for Weather.
<br>

All this bundled with intelligent string handling and *gTTs*(google text to speech) gives us T.A.R.S.<br>
<br>
The package is bundled into a single executable file (.exe found in this repository) so it can be directly run from your windows machine without installing loads of required libraries.

## Uniqueness
This assistant features functionalities that can be moulded according to the users needs. Unlike the closed source alternatives, this is flixeble and can be modified by a the developer community and its feaures can be expanded by anyone.<br> It doesnt store any user data, hence there is no risk of large companies gathering and selling your data. Moreover it features a web app along with the local machine app for Windows and MacOS. There isnt a functioning webapp for an assistant i could find hence i worked on one along with the app for the local machine. <br>

<button class="button3" style="vertical-align:middle" onclick="location.href='https://anubhavs.pythonanywhere.com/';"> <span><b>Use T.A.R.S</b></span></button>

Project link: <a href="https://github.com/sharma-anubhav/T.A.R.S.">Github</a><br>
WebApp Project: <a href="https://github.com/sharma-anubhav/DS3">Github</a>
<br>
For Windows, Download the Application <a href="https://github.com/sharma-anubhav/T.A.R.S./raw/master/V-1.0/Jarvis.exe">exe</a> file<br>
For Windows, Download the Application <a href="https://github.com/sharma-anubhav/DS3">dmg</a> file

