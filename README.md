# JotForum

[![npm version](https://badge.fury.io/js/jotforum.svg)](https://badge.fury.io/js/jotforum "View this package on npm") 
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![ISC License][license-image]][license-url]

JotForum is a forum tool that uses React.JS and JotForm and allows people to communicate with each other. 
Library works after installing via npm or yarn in your js or html files. 
You need to provide your JotForm api key for the initialization. 
Then, JotForum creates a form with the name which is same with your file name. Each time a user comments or replies, 
the data is sent via jotform api to the created form. If the form is already created with given name, current submissions (comments & replies) are displayed.
Users need to enter their name, comment and upload their avatar. However for the sake of simplicity, users can login with their JotForm account and leave comments directly.

## Installation  

Using [npm](https://www.npmjs.com/):  

```bash
$ npm install --save jotforum
```

Using [yarn](https://yarnpkg.com/):
```bash
$ yarn add jotforum
```

## Usage  

### JotForum on a ReactJS app

This is the component that will load the JotForum comments section.

```js
import JotForum from 'jotforum';
// in your React function use:
  useEffect(() => {
    if (forumRef.current) {
      const forum = new JotForum(forumRef.current, "yourAPIKey", "pageName");
    }
  }, [forumRef.current]);
// in the function's return, use the following tag
   <div ref={forumRef} />
```

This object takes your api key, pageName of the initialized file and div id of the current file with Ref to render react.js 

### JotForum on HTML file

This component can be used to embed a Disqus comment into your page.  

```html
 // this script directly connects to the github source
<script src="https://raw.githack.com/AhmetIsk/JotForum/main/dist/index.umd.js"></script>
 // or you can install npm and then run your html in your local server
<script src="your_project_directory\node_modules\jotforum\dist\index.umd.js"></script>

<div id="jfcomments"></div>

<script>
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var commentsDiv = document.querySelector('#jfcomments');
    var apiKey = "yourAPI";
    var comments = new JotForum(commentsDiv, apiKey, page);
</script>

```

You can also use JotForum in your HTML files. You need to import the source folder in script after initializing jotforum via yarn or npm. Then, by giving your JotForm API key, you can initialize JotForum in your HTML file within the given div tag as in example code. Created form will take your current HTML file's name.


### Example Usage
JotForum is implemented to [Ahmet Işık Art Gallery Website](https://ahmetisk.github.io/Personal-Website/index.html) that is created with using HTML, CSS and JS. Normally, a discussion section is almost impossible without a database. However thanks to JotForum, 
you can see the discussions below the oil colors and acrylic colors sections.  
### License

JotForum is freely distributable under the terms of the [ISC license][license-url].

## About JotForum

JotForum is an intern project conducted by me during myinternship at [JotForm]. Special thanks to my mentor [Gökay Okyay].


[license-image]: https://img.shields.io/badge/license-ISC-blue.svg?style=flat
[license-url]: LICENSE

[npm-downloads-image]: https://img.shields.io/npm/dm/jotforum.svg?style=flat
[npm-downloads-url]: https://www.npmjs.com/package/jotforum
[JotForm]: https://www.jotform.com/
[Gökay Okyay]: https://github.com/gokayokyay