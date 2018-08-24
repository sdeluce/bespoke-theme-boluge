/*!
 * bespoke-theme-boluge v1.0.6
 *
 * Copyright 2018, Stephane Deluce
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.boluge=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@font-face{font-family:'Ubuntu';src:url('../fonts/Ubuntu-Italic.woff2') format('woff2'),url('../fonts/Ubuntu-Italic.woff') format('woff'),url('../fonts/Ubuntu-Italic.ttf') format('truetype'),url('../fonts/Ubuntu-Italic.svg#Ubuntu-Italic') format('svg');font-weight:400;font-style:italic;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('../fonts/Ubuntu-Medium.woff2') format('woff2'),url('../fonts/Ubuntu-Medium.woff') format('woff'),url('../fonts/Ubuntu-Medium.ttf') format('truetype'),url('../fonts/Ubuntu-Medium.svg#Ubuntu-Medium') format('svg');font-weight:500;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('../fonts/Ubuntu-MediumItalic.woff2') format('woff2'),url('../fonts/Ubuntu-MediumItalic.woff') format('woff'),url('../fonts/Ubuntu-MediumItalic.ttf') format('truetype'),url('../fonts/Ubuntu-MediumItalic.svg#Ubuntu-MediumItalic') format('svg');font-weight:500;font-style:italic;font-smooth:auto}@font-face{font-family:'Patua One';src:url('../fonts/PatuaOne-Regular.woff2') format('woff2'),url('../fonts/PatuaOne-Regular.woff') format('woff'),url('../fonts/PatuaOne-Regular.ttf') format('truetype'),url('../fonts/PatuaOne-Regular.svg#PatuaOne-Regular') format('svg');font-weight:400;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-Bold.woff2') format('woff2'),url('./fonts/Ubuntu-Bold.woff') format('woff'),url('./fonts/Ubuntu-Bold.ttf') format('truetype'),url('./fonts/Ubuntu-Bold.svg#Ubuntu-Bold') format('svg');font-weight:700;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('../fonts/Ubuntu-LightItalic.woff2') format('woff2'),url('../fonts/Ubuntu-LightItalic.woff') format('woff'),url('../fonts/Ubuntu-LightItalic.ttf') format('truetype'),url('../fonts/Ubuntu-LightItalic.svg#Ubuntu-LightItalic') format('svg');font-weight:300;font-style:italic;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('../fonts/Ubuntu-Light.woff2') format('woff2'),url('../fonts/Ubuntu-Light.woff') format('woff'),url('../fonts/Ubuntu-Light.ttf') format('truetype'),url('../fonts/Ubuntu-Light.svg#Ubuntu-Light') format('svg');font-weight:300;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('../fonts/Ubuntu-Regular.woff2') format('woff2'),url('../fonts/Ubuntu-Regular.woff') format('woff'),url('../fonts/Ubuntu-Regular.ttf') format('truetype'),url('../fonts/Ubuntu-Regular.svg#Ubuntu-Regular') format('svg');font-weight:400;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('../fonts/Ubuntu-BoldItalic.woff2') format('woff2'),url('../fonts/Ubuntu-BoldItalic.woff') format('woff'),url('../fonts/Ubuntu-BoldItalic.ttf') format('truetype'),url('../fonts/Ubuntu-BoldItalic.svg#Ubuntu-BoldItalic') format('svg');font-weight:700;font-style:italic;font-smooth:auto}.bespoke-parent{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto;background:#1c2429;overflow:hidden;transition:background 1s ease;background-position:50% 50%;font-size:1.25rem}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{font-family:'Ubuntu',sans-serif;pointer-events:none;color:#fff;z-index:2}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-scale-parent a{color:#ffc107;text-decoration:none}.bespoke-scale-parent h1,.bespoke-scale-parent h2,.bespoke-scale-parent h3,.bespoke-scale-parent h4,.bespoke-scale-parent h5,.bespoke-scale-parent h6{transition:color 1s ease;font-family:'Patua One',cursive;text-shadow:0 .25rem .25rem rgba(0,0,0,.5)}.bespoke-scale-parent h1{font-size:3.2rem}.bespoke-scale-parent h2{font-size:2.4rem}.bespoke-scale-parent h3{font-size:2.133333333333334rem}.bespoke-scale-parent ul li,.bespoke-scale-parent ol li{line-height:1.8rem}.bespoke-scale-parent p{transition:color 1s ease;line-height:1.8rem}.bespoke-scale-parent p.center{text-align:center}.bespoke-scale-parent p.left{text-align:left}.bespoke-scale-parent p.right{text-align:right}.bespoke-scale-parent p.justify{text-align:justify;text-justify:inter-word}.bespoke-slide{transition:opacity .5s ease;width:620px;height:460px;position:absolute;top:50%;left:50%;margin-left:-310px;margin-top:-230px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active,.bespoke-active[data-bespoke-backdrop]{transition-delay:.25s}.bespoke-inactive{opacity:0}.bespoke-inactive,.bespoke-bullet-inactive{pointer-events:none}.bespoke-backdrop h1,.bespoke-backdrop h2,.bespoke-backdrop h3{text-shadow:0 .25rem .25rem #000}.bespoke-progress-parent{position:absolute;bottom:0;left:0;right:0;height:.2rem;z-index:1}.bespoke-progress-bar{height:100%;position:absolute;bottom:0;left:0;background:#ffc107;transition:width 1s ease}.bespoke-bullet{transition:opacity 500ms ease}.bespoke-bullet-active{opacity:1}.bespoke-bullet-inactive{opacity:0}.bespoke-backdrop{opacity:0;position:absolute;left:0;right:0;top:0;bottom:0;transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0) scale(1.3);transform:translateZ(0) scale(1.3)}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}.bespoke-backdrop-before{transition-delay:.2s}.bespoke-backdrop-active{opacity:1}.emphatic-text h1,.emphatic-text h2,.emphatic-text h3,.emphatic-text h4,.emphatic-text h5,.emphatic-text h6{text-shadow:0 .25rem .25rem rgba(0,0,0,.25)}.light{color:#1c2429}.light h1,.light h2,.light h3,.light h4,.light h5,.light h6,.light p{color:#1c2429;text-shadow:0 .25rem .25rem rgba(0,0,0,.15)}.green{background:#388e3c}.orange{background:#ffc107}.red{background:#f44336}.blue{background:#1976d2}.bespoke-blackout .bespoke-blackout-overlay{transition:opacity .5s ease-in}.bespoke-blackout-overlay{transition:opacity .5s ease-in,visibility 0s linear .5s}";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});