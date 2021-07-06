# JotForum

[![npm version](https://badge.fury.io/js/disqus-react.svg)](https://badge.fury.io/js/disqus-react "View this package on npm") 
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]

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

### JotForum as a React Component

This is the component that will load the JotForum comments section.

```js
import { JotForum } from 'jotforum';

<JotForum
    address = {document.querySelector('#id')}
    apiKey = {yourJotformAPIKey}
    pageName = 'example'
/>
```

This component takes your api key, pageName of the initialized file and div id of the html file to render react.js 

### JotForum on HTML file

This component can be used to embed a Disqus comment into your page.  

```html
<script src="your_project_directory\node_modules\jotforum\dist\index.umd.js">

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

### License

JotForum is freely distributable under the terms of the [MIT license][license-url].

## About JotForum

JotForum is an intern project conducted by me during myinternship at [JotForm]. Special thanks to my mentor [Gökay Okyay].


[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-downloads-image]: https://img.shields.io/npm/dm/moment.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/moment?minimal=true
[JotForm]: https://www.jotform.com/
[Gökay Okyay]: https://github.com/gokayokyay
