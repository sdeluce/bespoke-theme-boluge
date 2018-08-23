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
