'use strict';

require('babel-polyfill');

module.exports.Discovery = require('./lib/Discovery.js');
module.exports.Device = require('./lib/Device.js');

if( typeof window !== 'undefined' ) {
	window.Luxio = module.exports;
}