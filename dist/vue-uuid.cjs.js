/*!
 * vue-uuid v1.1.1
 * (c) 2017-present Vitor Luiz Cavalcanti
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var v1 = _interopDefault(require('uuid/v1'));
var v4 = _interopDefault(require('uuid/v4'));
var v5 = _interopDefault(require('uuid/v5'));

/**
 * @typedef {{ v1: typeof v1, v4: typeof v4, v5: typeof v5 }} UUID
 */

/**
 * An object with uuid's v1, v4 and v5 functions.
 * @type {UUI}
 */

var uuid = {
  v1: v1,
  v4: v4,
  v5: v5
};
/**
 * Installs UUID on Vue instance. It creates a property on Vue instance to
 * expose an object with uuid's v1, v4 and v5 functions.
 * @example ```js
 * import Vue from 'vue';
 * import VueUUID from 'vue-uuid';
 *
 * Vue.use(VueUUID);
 *
 * new Vue({
 *   mounted () {
 *     console.log(this.$uuid.v1());
 *   }
 * });
 * ```
 * @param {import('vue').default} Vue Vue constructor.
 */

function install(Vue) {
  Vue.prototype.$uuid = uuid;
}

exports.uuid = uuid;
exports.default = install;
