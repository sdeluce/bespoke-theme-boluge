/*!
 * bespoke-theme-boluge v1.0.0
 *
 * Copyright 2018, Stephane Deluce
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.boluge=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.bespoke-parent{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto;background:#222;overflow:hidden;transition:background 1s ease;background-position:50% 50%;font-size:1.2rem}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{font-family:'Ubuntu',sans-serif;pointer-events:none;color:#fff;z-index:2}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-scale-parent a{color:#ffc107;text-decoration:none}.bespoke-scale-parent h1,.bespoke-scale-parent h2,.bespoke-scale-parent h3,.bespoke-scale-parent h4,.bespoke-scale-parent h5,.bespoke-scale-parent h6{font-family:'Patua One',cursive;text-shadow:0 .25rem .25rem rgba(0,0,0,.5)}.bespoke-scale-parent h1{font-size:3rem}.bespoke-scale-parent h2{font-size:2.25rem}.bespoke-scale-parent h3{font-size:1.5rem}.bespoke-scale-parent pre{background:#fff;color:#222;padding:.7rem 1rem;border-radius:.3rem;box-shadow:0 0 1rem rgba(0,0,0,.5);border:none}.bespoke-scale-parent ul li,.bespoke-scale-parent ol li{line-height:1.8rem}.bespoke-slide{transition:opacity .5s ease;width:960px;height:480px;position:absolute;top:50%;left:50%;margin-left:-480px;margin-top:-240px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active,.bespoke-active[data-bespoke-backdrop]{transition-delay:.25s}.bespoke-inactive{opacity:0}.bespoke-inactive,.bespoke-bullet-inactive{pointer-events:none}.bespoke-backdrop h1,.bespoke-backdrop h2,.bespoke-backdrop h3{text-shadow:0 .25rem .25rem #000}.bespoke-progress-parent{position:absolute;bottom:0;left:0;right:0;height:.2rem;z-index:1}.bespoke-progress-bar{height:100%;position:absolute;bottom:0;left:0;background:#ffc107;transition:width 1s ease}.bespoke-bullet{transition:opacity 500ms ease}.bespoke-bullet-active{opacity:1}.bespoke-bullet-inactive{opacity:0}.bespoke-backdrop{opacity:0;position:absolute;left:0;right:0;top:0;bottom:0;transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0) scale(1.3);transform:translateZ(0) scale(1.3)}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}.bespoke-backdrop-before{transition-delay:.2s}.bespoke-backdrop-active{opacity:1}.emphatic{background:#fff}.emphatic-text{color:#222}.emphatic-text h1,.emphatic-text h2,.emphatic-text h3,.emphatic-text h4,.emphatic-text h5,.emphatic-text h6{color:#222;text-shadow:0 .25rem .25rem rgba(0,0,0,.25)}.bespoke-blackout .bespoke-blackout-overlay{transition:opacity .5s ease-in}.bespoke-blackout-overlay{transition:opacity .5s ease-in,visibility 0s linear .5s}";
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