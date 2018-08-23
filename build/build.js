(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var bespoke = require('bespoke'),
  boluge = require('../../../lib/bespoke-theme-boluge.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop'),
  prism = require('bespoke-prism'),
  blackout = require('bespoke-blackout'),
  fullscreen = require('bespoke-fullscreen');


bespoke.from('article', [
  boluge(),
  keys('vertical'),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  backdrop(),
  blackout(),
  fullscreen(),
  prism()
]);

},{"../../../lib/bespoke-theme-boluge.js":2,"bespoke":13,"bespoke-backdrop":3,"bespoke-blackout":4,"bespoke-bullets":5,"bespoke-fullscreen":7,"bespoke-keys":8,"bespoke-prism":9,"bespoke-progress":10,"bespoke-scale":11,"bespoke-touch":12}],2:[function(require,module,exports){

var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function() {
  var css = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-Italic.woff2') format('woff2'),url('./fonts/Ubuntu-Italic.woff') format('woff'),url('./fonts/Ubuntu-Italic.ttf') format('truetype'),url('./fonts/Ubuntu-Italic.svg#Ubuntu-Italic') format('svg');font-weight:400;font-style:italic;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-Medium.woff2') format('woff2'),url('./fonts/Ubuntu-Medium.woff') format('woff'),url('./fonts/Ubuntu-Medium.ttf') format('truetype'),url('./fonts/Ubuntu-Medium.svg#Ubuntu-Medium') format('svg');font-weight:500;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-MediumItalic.woff2') format('woff2'),url('./fonts/Ubuntu-MediumItalic.woff') format('woff'),url('./fonts/Ubuntu-MediumItalic.ttf') format('truetype'),url('./fonts/Ubuntu-MediumItalic.svg#Ubuntu-MediumItalic') format('svg');font-weight:500;font-style:italic;font-smooth:auto}@font-face{font-family:'Patua One';src:url('./fonts/PatuaOne-Regular.woff2') format('woff2'),url('./fonts/PatuaOne-Regular.woff') format('woff'),url('./fonts/PatuaOne-Regular.ttf') format('truetype'),url('./fonts/PatuaOne-Regular.svg#PatuaOne-Regular') format('svg');font-weight:400;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-Bold.woff2') format('woff2'),url('./fonts/Ubuntu-Bold.woff') format('woff'),url('./fonts/Ubuntu-Bold.ttf') format('truetype'),url('./fonts/Ubuntu-Bold.svg#Ubuntu-Bold') format('svg');font-weight:700;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-LightItalic.woff2') format('woff2'),url('./fonts/Ubuntu-LightItalic.woff') format('woff'),url('./fonts/Ubuntu-LightItalic.ttf') format('truetype'),url('./fonts/Ubuntu-LightItalic.svg#Ubuntu-LightItalic') format('svg');font-weight:300;font-style:italic;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-Light.woff2') format('woff2'),url('./fonts/Ubuntu-Light.woff') format('woff'),url('./fonts/Ubuntu-Light.ttf') format('truetype'),url('./fonts/Ubuntu-Light.svg#Ubuntu-Light') format('svg');font-weight:300;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-Regular.woff2') format('woff2'),url('./fonts/Ubuntu-Regular.woff') format('woff'),url('./fonts/Ubuntu-Regular.ttf') format('truetype'),url('./fonts/Ubuntu-Regular.svg#Ubuntu-Regular') format('svg');font-weight:400;font-style:normal;font-smooth:auto}@font-face{font-family:'Ubuntu';src:url('./fonts/Ubuntu-BoldItalic.woff2') format('woff2'),url('./fonts/Ubuntu-BoldItalic.woff') format('woff'),url('./fonts/Ubuntu-BoldItalic.ttf') format('truetype'),url('./fonts/Ubuntu-BoldItalic.svg#Ubuntu-BoldItalic') format('svg');font-weight:700;font-style:italic;font-smooth:auto}.bespoke-parent{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto;background:#222;overflow:hidden;transition:background 1s ease;background-position:50% 50%;font-size:1.25rem}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{font-family:'Ubuntu',sans-serif;pointer-events:none;color:#fff;z-index:2}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-scale-parent a{color:#ffc107;text-decoration:none}.bespoke-scale-parent h1,.bespoke-scale-parent h2,.bespoke-scale-parent h3,.bespoke-scale-parent h4,.bespoke-scale-parent h5,.bespoke-scale-parent h6{font-family:'Patua One',cursive;text-shadow:0 .25rem .25rem rgba(0,0,0,.5)}.bespoke-scale-parent h1{font-size:3.2rem}.bespoke-scale-parent h2{font-size:2.4rem}.bespoke-scale-parent h3{font-size:2.133333333333334rem}.bespoke-scale-parent pre{background:#fff;color:#222;padding:.7rem 1rem;border-radius:.3rem;box-shadow:0 0 1rem rgba(0,0,0,.5);border:none}.bespoke-scale-parent ul li,.bespoke-scale-parent ol li{line-height:1.8rem}.bespoke-scale-parent p.center{text-align:center}.bespoke-scale-parent p.left{text-align:left}.bespoke-scale-parent p.right{text-align:right}.bespoke-scale-parent p.justify{text-align:justify;text-justify:inter-word}.bespoke-slide{transition:opacity .5s ease;width:620px;height:460px;position:absolute;top:50%;left:50%;margin-left:-310px;margin-top:-230px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active,.bespoke-active[data-bespoke-backdrop]{transition-delay:.25s}.bespoke-inactive{opacity:0}.bespoke-inactive,.bespoke-bullet-inactive{pointer-events:none}.bespoke-backdrop h1,.bespoke-backdrop h2,.bespoke-backdrop h3{text-shadow:0 .25rem .25rem #000}.bespoke-progress-parent{position:absolute;bottom:0;left:0;right:0;height:.2rem;z-index:1}.bespoke-progress-bar{height:100%;position:absolute;bottom:0;left:0;background:#ffc107;transition:width 1s ease}.bespoke-bullet{transition:opacity 500ms ease}.bespoke-bullet-active{opacity:1}.bespoke-bullet-inactive{opacity:0}.bespoke-backdrop{opacity:0;position:absolute;left:0;right:0;top:0;bottom:0;transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0) scale(1.3);transform:translateZ(0) scale(1.3)}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}.bespoke-backdrop-before{transition-delay:.2s}.bespoke-backdrop-active{opacity:1}.emphatic{background:#fff}.emphatic-text{color:#222}.emphatic-text h1,.emphatic-text h2,.emphatic-text h3,.emphatic-text h4,.emphatic-text h5,.emphatic-text h6{color:#222;text-shadow:0 .25rem .25rem rgba(0,0,0,.25)}.bespoke-blackout .bespoke-blackout-overlay{transition:opacity .5s ease-in}.bespoke-blackout-overlay{transition:opacity .5s ease-in,visibility 0s linear .5s}";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};

},{"bespoke-classes":6,"insert-css":14}],3:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var backdrops;

    function createBackdropForSlide(slide) {
      var backdropAttribute = slide.getAttribute('data-bespoke-backdrop');

      if (backdropAttribute) {
        var backdrop = document.createElement('div');
        backdrop.className = backdropAttribute;
        backdrop.classList.add('bespoke-backdrop');
        deck.parent.appendChild(backdrop);
        return backdrop;
      }
    }

    function updateClasses(el) {
      if (el) {
        var index = backdrops.indexOf(el),
          currentIndex = deck.slide();

        removeClass(el, 'active');
        removeClass(el, 'inactive');
        removeClass(el, 'before');
        removeClass(el, 'after');

        if (index !== currentIndex) {
          addClass(el, 'inactive');
          addClass(el, index < currentIndex ? 'before' : 'after');
        } else {
          addClass(el, 'active');
        }
      }
    }

    function removeClass(el, className) {
      el.classList.remove('bespoke-backdrop-' + className);
    }

    function addClass(el, className) {
      el.classList.add('bespoke-backdrop-' + className);
    }

    backdrops = deck.slides
      .map(createBackdropForSlide);

    deck.on('activate', function() {
      backdrops.forEach(updateClasses);
    });
  };
};

},{}],4:[function(require,module,exports){
module.exports = function() {
  require('insert-css')('.bespoke-blackout-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#101010;opacity:0;visibility:hidden;z-index:1000}.bespoke-blackout .bespoke-blackout-overlay{opacity:1;visibility:visible}');
  return function(deck) {
    var KEY_B = 66, KEY_DOT = 190, EVT_KEYDOWN = 'keydown',
      blackout = false,
      addOverlay = function() {
        var overlay = document.createElement('div');
        overlay.className = 'bespoke-blackout-overlay';
        deck.parent.appendChild(overlay);
      },
      toggleBlackout = function() {
        var parentClasses = deck.parent.classList;
        if (blackout) {
          parentClasses.remove('bespoke-blackout');
          blackout.forEach(function(unbindEvent) { unbindEvent(); });
          blackout = false;
        }
        else {
          parentClasses.add('bespoke-blackout');
          blackout = [deck.on('next', preventDefault), deck.on('prev', preventDefault)];
        }
      },
      preventDefault = function() { return false; },
      isModifierPressed = function(e) {
        return !!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey);
      },
      onKeydown = function(e) {
        var key = e.which;
        if ((key === KEY_B || key === KEY_DOT) && !isModifierPressed(e)) toggleBlackout();
      };
    deck.on('blackout', toggleBlackout);
    deck.on('destroy', function() {
      deck.parent.removeChild(deck.parent.querySelector('.bespoke-blackout-overlay'));
      document.removeEventListener(EVT_KEYDOWN, onKeydown);
    });
    addOverlay();
    document.addEventListener(EVT_KEYDOWN, onKeydown);
  };
};

},{"insert-css":14}],5:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var activeSlideIndex,
      activeBulletIndex,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll((typeof options === 'string' ? options : '[data-bespoke-bullet]')), 0);
      }),

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1;

        if (activeSlideHasBulletByOffset(1)) {
          activateBullet(activeSlideIndex, activeBulletIndex + 1);
          return false;
        } else if (bullets[nextSlideIndex]) {
          activateBullet(nextSlideIndex, 0);
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1;

        if (activeSlideHasBulletByOffset(-1)) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        } else if (bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        }
      },

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;

        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-active');
            }

            if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-current');
            } else {
              bullet.classList.remove('bespoke-bullet-current');
            }
          });
        });
      },

      activeSlideHasBulletByOffset = function(offset) {
        return bullets[activeSlideIndex][activeBulletIndex + offset] !== undefined;
      };

    deck.on('next', next);
    deck.on('prev', prev);

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    activateBullet(0, 0);
  };
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var KEY_F = 70, KEY_F11 = 122, EVT_KEYDOWN = 'keydown',
      toggleFullscreen = function() {
        var el, func;
        if (document.fullscreenElement || document.webkitFullscreenElement ||
            document.mozFullScreenElement || document.msFullscreenElement) {
          func = (el = document).exitFullscreen ||
              el.webkitExitFullscreen || el.mozCancelFullScreen || el.msExitFullscreen;
        }
        else {
          func = (el = document.documentElement).requestFullscreen ||
              el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        }
        func.apply(el);
      },
      isModifierPressed = function(e) {
        return !!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey);
      },
      onKeydown = function(e) {
        var key = e.which;
        if ((key === KEY_F || key === KEY_F11) && !isModifierPressed(e)) {
          toggleFullscreen();
          if (key === KEY_F11) e.preventDefault();
        }
      };
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled || document.msFullscreenEnabled) {
      deck.on('destroy', function() { document.removeEventListener(EVT_KEYDOWN, onKeydown); });
      deck.on('fullscreen.toggle', toggleFullscreen);
      document.addEventListener(EVT_KEYDOWN, onKeydown);
    }
  };
};

},{}],8:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical';

    document.addEventListener('keydown', function(e) {
      if (e.which == 34 || // PAGE DOWN
        (e.which == 32 && !e.shiftKey) || // SPACE WITHOUT SHIFT
        (isHorizontal && e.which == 39) || // RIGHT
        (!isHorizontal && e.which == 40) // DOWN
      ) { deck.next(); }

      if (e.which == 33 || // PAGE UP
        (e.which == 32 && e.shiftKey) || // SPACE + SHIFT
        (isHorizontal && e.which == 37) || // LEFT
        (!isHorizontal && e.which == 38) // UP
      ) { deck.prev(); }
    });
  };
};

},{}],9:[function(require,module,exports){
(function (global){
/*! bespoke-prism v1.0.1 © 2016 Hubert SABLONNIÈRE, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.prism=e()}}(function(){return function e(n,t,a){function r(o,s){if(!t[o]){if(!n[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[o]={exports:{}};n[o][0].call(u.exports,function(e){var t=n[o][1][e];return r(t?t:e)},u,u.exports,e,n,t,a)}return t[o].exports}for(var i="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(e,n,t){var a=e("insert-css"),r=e("prism-themes/themes/prism-ghcolors.css");n.exports=function(){var n=e("prismjs");return e("prismjs/plugins/unescaped-markup/prism-unescaped-markup"),e("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace"),a(r,{prepend:!0}),function(){n.highlightAll()}}},{"insert-css":2,"prism-themes/themes/prism-ghcolors.css":3,prismjs:6,"prismjs/plugins/normalize-whitespace/prism-normalize-whitespace":4,"prismjs/plugins/unescaped-markup/prism-unescaped-markup":5}],2:[function(e,n,t){var a={};n.exports=function(e,n){if(!a[e]){a[e]=!0;var t=document.createElement("style");t.setAttribute("type","text/css"),"textContent"in t?t.textContent=e:t.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];n&&n.prepend?r.insertBefore(t,r.childNodes[0]):r.appendChild(t)}}},{}],3:[function(e,n,t){n.exports='/**\n * GHColors theme by Avi Aryan (http://aviaryan.in)\n * Inspired by Github syntax coloring\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n    color: #393A34;\n    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    font-size: 0.95em;\n    line-height: 1.2em;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n    background: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n    background: #b3d4fc;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n    border: 1px solid #dddddd;\n    background-color: white;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n    padding: .2em;\n    padding-top: 1px; padding-bottom: 1px;\n    background: #f8f8f8;\n    border: 1px solid #dddddd;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n    color: #999988; font-style: italic;\n}\n\n.token.namespace {\n    opacity: .7;\n}\n\n.token.string,\n.token.attr-value {\n    color: #e3116c;\n}\n.token.punctuation,\n.token.operator {\n    color: #393A34; /* no highlight */\n}\n\n.token.entity,\n.token.url,\n.token.symbol,\n.token.number,\n.token.boolean,\n.token.variable,\n.token.constant,\n.token.property,\n.token.regex,\n.token.inserted {\n    color: #36acaa;\n}\n\n.token.atrule,\n.token.keyword,\n.token.attr-name,\n.language-autohotkey .token.selector {\n    color: #00a4db;\n}\n\n.token.function,\n.token.deleted,\n.language-autohotkey .token.tag {\n    color: #9a050f;\n}\n\n.token.tag,\n.token.selector,\n.language-autohotkey .token.keyword {\n    color: #00009f;\n}\n\n.token.important,\n.token.function,\n.token.bold {\n    font-weight: bold;\n}\n\n.token.italic {\n    font-style: italic;\n}'},{}],4:[function(e,n,t){!function(){function e(e){this.defaults=a({},e)}function n(e){return e.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}function t(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}if("undefined"!=typeof self&&self.Prism&&self.document){var a=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};e.prototype={setDefaults:function(e){this.defaults=a(this.defaults,e)},normalize:function(e,t){t=a(this.defaults,t);for(var r in t){var i=n(r);"normalize"!==r&&"setDefaults"!==i&&t[r]&&this[i]&&(e=this[i].call(this,e,t[r]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array((++n)).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(new RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(new RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array((++n)).join("\t")+"$&")},breakLines:function(e,n){n=n===!0?80:0|n||80;for(var a=e.split("\n"),r=0;r<a.length;++r)if(!(t(a[r])<=n)){for(var i=a[r].split(/(\s+)/g),o=0,s=0;s<i.length;++s){var l=t(i[s]);o+=l,o>n&&(i[s]="\n"+i[s],o=l)}a[r]=i.join("")}return a.join("\n")}},Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-highlight",function(e){var n=e.element.parentNode,t=/\bno-whitespace-normalization\b/;if(!(!e.code||!n||"pre"!==n.nodeName.toLowerCase()||e.settings&&e.settings["whitespace-normalization"]===!1||t.test(n.className)||t.test(e.element.className))){for(var a=n.childNodes,r="",i="",o=!1,s=Prism.plugins.NormalizeWhitespace,l=0;l<a.length;++l){var c=a[l];c==e.element?o=!0:"#text"===c.nodeName&&(o?i+=c.nodeValue:r+=c.nodeValue,n.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=r+e.element.innerHTML+i;e.element.innerHTML=s.normalize(u,e.settings),e.code=e.element.textContent}else e.code=r+e.code+i,e.code=s.normalize(e.code,e.settings)}})}}()},{}],5:[function(e,n,t){!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.languages.markup&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(e){e.selector+=", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"}),Prism.hooks.add("before-sanity-check",function(e){if("markup"==e.language){if(e.element.matches("script[type='text/plain']")){var n=document.createElement("code"),t=document.createElement("pre");return t.className=n.className=e.element.className,e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"</script>"),n.textContent=e.code,t.appendChild(n),e.element.parentNode.replaceChild(t,e.element),void(e.element=n)}var t=e.element.parentNode;!e.code&&t&&"pre"==t.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)}}))}()},{}],6:[function(e,n,t){(function(e){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,n=0,a=t.Prism={util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e){var n=a.util.type(e);switch(n){case"Object":var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=a.util.clone(e[r]));return t;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){r=r||a.languages;var i=r[e];if(2==arguments.length){t=arguments[1];for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var o in t)t.hasOwnProperty(o)&&(s[o]=t[o]);s[l]=i[l]}return a.languages.DFS(a.languages,function(n,t){t===r[e]&&n!=e&&(this[n]=s)}),r[e]=s},DFS:function(e,n,t,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],t||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],n,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],n,null,r)))}},plugins:{},highlightAll:function(e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var r,i=t.elements||document.querySelectorAll(t.selector),o=0;r=i[o++];)a.highlightElement(r,e===!0,t.callback)},highlightElement:function(n,r,i){for(var o,s,l=n;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[o]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=n.textContent,u={element:n,language:o,grammar:s,code:c};if(a.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return void a.hooks.run("complete",u);if(a.hooks.run("before-highlight",u),r&&t.Worker){var g=new Worker(a.filename);g.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(n),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,n,t){var i=a.tokenize(e,n);return r.stringify(a.util.encode(i),t)},tokenize:function(e,n,t){var r=a.Token,i=[e],o=n.rest;if(o){for(var s in o)n[s]=o[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===a.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],g=u.inside,p=!!u.lookbehind,d=!!u.greedy,f=0,m=u.alias;u=u.pattern||u;for(var h=0;h<i.length;h++){var y=i[h];if(i.length>e.length)break e;if(!(y instanceof r)){u.lastIndex=0;var k=u.exec(y),v=1;if(!k&&d&&h!=i.length-1){var b=i[h+1].matchedStr||i[h+1],w=y+b;if(h<i.length-2&&(w+=i[h+2].matchedStr||i[h+2]),u.lastIndex=0,k=u.exec(w),!k)continue;var x=k.index+(p?k[1].length:0);if(x>=y.length)continue;var N=k.index+k[0].length,C=y.length+b.length;if(v=3,N<=C){if(i[h+1].greedy)continue;v=2,w=w.slice(0,C)}y=w}if(k){p&&(f=k[1].length);var x=k.index+f,k=k[0].slice(f),N=x+k.length,A=y.slice(0,x),j=y.slice(N),z=[h,v];A&&z.push(A);var P=new r(s,g?a.tokenize(k,g):k,m,k,d);z.push(P),j&&z.push(j),Array.prototype.splice.apply(i,z)}}}}}return i},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}}},r=a.Token=function(e,n,t,a,r){this.type=e,this.content=n,this.alias=t,this.matchedStr=a||null,this.greedy=!!r};if(r.stringify=function(e,n,t){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(t){return r.stringify(t,n,e)}).join("");var i={type:e.type,content:r.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}a.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=(s?" ":"")+l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(t.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code,o=n.immediateClose;t.postMessage(a.highlight(i,a.languages[r],r)),o&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&("loading"!==document.readyState?requestAnimationFrame(a.highlightAll,0):document.addEventListener("DOMContentLoaded",a.highlightAll))),t.Prism}();"undefined"!=typeof n&&n.exports&&(n.exports=a),"undefined"!=typeof e&&(e.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var t,r=n.getAttribute("data-src"),i=n,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(t=(n.className.match(o)||[,""])[1]),!t){var s=(r.match(/\.(\w+)$/)||[,""])[1];t=e[s]||s}var l=document.createElement("code");l.className="language-"+t,n.textContent="",l.textContent="Loading…",n.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,a.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressBar.className = 'bespoke-progress-bar';
    progressParent.appendChild(progressBar);
    deck.parent.appendChild(progressParent);

    deck.on('activate', function(e) {
      progressBar.style[prop] = (e.index * 100 / (deck.slides.length - 1)) + '%';
    });
  };
};

},{}],11:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      firstSlide = deck.slides[0],
      slideHeight = firstSlide.offsetHeight,
      slideWidth = firstSlide.offsetWidth,
      useZoom = options === 'zoom' || ('zoom' in parent.style && options !== 'transform'),

      wrap = function(element) {
        var wrapper = document.createElement('div');
        wrapper.className = 'bespoke-scale-parent';
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        return wrapper;
      },

      elements = useZoom ? deck.slides : deck.slides.map(wrap),

      transformProperty = (function(property) {
        var prefixes = 'Moz Webkit O ms'.split(' ');
        return prefixes.reduce(function(currentProperty, prefix) {
            return prefix + property in parent.style ? prefix + property : currentProperty;
          }, property.toLowerCase());
      }('Transform')),

      scale = useZoom ?
        function(ratio, element) {
          element.style.zoom = ratio;
        } :
        function(ratio, element) {
          element.style[transformProperty] = 'scale(' + ratio + ')';
        },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = parent.offsetHeight / slideHeight;

        elements.forEach(scale.bind(null, Math.min(xScale, yScale)));
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

};

},{}],12:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var axis = options == 'vertical' ? 'Y' : 'X',
      startPosition,
      delta;

    deck.parent.addEventListener('touchstart', function(e) {
      if (e.touches.length == 1) {
        startPosition = e.touches[0]['page' + axis];
        delta = 0;
      }
    });

    deck.parent.addEventListener('touchmove', function(e) {
      if (e.touches.length == 1) {
        e.preventDefault();
        delta = e.touches[0]['page' + axis] - startPosition;
      }
    });

    deck.parent.addEventListener('touchend', function() {
      if (Math.abs(delta) > 50) {
        deck[delta > 0 ? 'prev' : 'next']();
      }
    });
  };
};

},{}],13:[function(require,module,exports){
var from = function(opts, plugins) {
  var parent = (opts.parent || opts).nodeType === 1 ? (opts.parent || opts) : document.querySelector(opts.parent || opts),
    slides = [].filter.call(typeof opts.slides === 'string' ? parent.querySelectorAll(opts.slides) : (opts.slides || parent.children), function(el) { return el.nodeName !== 'SCRIPT'; }),
    activeSlide = slides[0],
    listeners = {},

    activate = function(index, customData) {
      if (!slides[index]) {
        return;
      }

      fire('deactivate', createEventData(activeSlide, customData));
      activeSlide = slides[index];
      fire('activate', createEventData(activeSlide, customData));
    },

    slide = function(index, customData) {
      if (arguments.length) {
        fire('slide', createEventData(slides[index], customData)) && activate(index, customData);
      } else {
        return slides.indexOf(activeSlide);
      }
    },

    step = function(offset, customData) {
      var slideIndex = slides.indexOf(activeSlide) + offset;

      fire(offset > 0 ? 'next' : 'prev', createEventData(activeSlide, customData)) && activate(slideIndex, customData);
    },

    on = function(eventName, callback) {
      (listeners[eventName] || (listeners[eventName] = [])).push(callback);
      return off.bind(null, eventName, callback);
    },

    off = function(eventName, callback) {
      listeners[eventName] = (listeners[eventName] || []).filter(function(listener) { return listener !== callback; });
    },

    fire = function(eventName, eventData) {
      return (listeners[eventName] || [])
        .reduce(function(notCancelled, callback) {
          return notCancelled && callback(eventData) !== false;
        }, true);
    },

    createEventData = function(el, eventData) {
      eventData = eventData || {};
      eventData.index = slides.indexOf(el);
      eventData.slide = el;
      return eventData;
    },

    deck = {
      on: on,
      off: off,
      fire: fire,
      slide: slide,
      next: step.bind(null, 1),
      prev: step.bind(null, -1),
      parent: parent,
      slides: slides
    };

  (plugins || []).forEach(function(plugin) {
    plugin(deck);
  });

  activate(0);

  return deck;
};

module.exports = {
  from: from
};

},{}],14:[function(require,module,exports){
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