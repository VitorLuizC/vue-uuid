'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var uuid = _interopDefault(require('uuid'));

var install = function (Vue) {
  Vue.prototype.$uuid = uuid;
};

module.exports = install;
