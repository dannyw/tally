tally.js
========

A bookmarklet to calculate our point efforts on Basecamp. 

1. To install, drag this bookmarklet to your bookmark bar: <a href="replace_me">Tally</a>
2. Edit the bookmarklet and replace the URL with this Javascript code (couldn't figure out how to put JS right into a link on this readme)

```
javascript:var e=document.createElement('script');e.setAttribute('language','javascript');e.setAttribute('src','https://dl.dropboxusercontent.com/u/180488/hacking/tally.js');document.body.appendChild(e);void(0);
```


To use, simply highlight any blocks of TODOs on a Basecamp project. Items that are preceded with brackets and a point value will be calculated. If you are highlighting a completed set of todos, it will breakdown points by person. 
