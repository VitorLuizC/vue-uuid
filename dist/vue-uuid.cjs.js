/*!
 * vue-uuid v1.0.0
 * (c) 2017-present Vitor Luiz Cavalcanti
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var v1 = _interopDefault(require('uuid/v1'));
var v4 = _interopDefault(require('uuid/v4'));
var v5 = _interopDefault(require('uuid/v5'));

var uuid = {
  v1: v1,
  v4: v4,
  v5: v5
};
function install(Vue) {
  Vue.prototype.$uuid = uuid;
}

exports.uuid = uuid;
exports.default = install;
