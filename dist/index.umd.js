(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('uuid')) :
  typeof define === 'function' && define.amd ? define(['exports', 'uuid'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueUUID = {}, global.uuid$1));
})(this, (function (exports, uuid$1) { 'use strict';

  /**
   * @typedef {Object} UUID
   * @property {typeof v1} v1
   * @property {typeof v3} v3
   * @property {typeof v4} v4
   * @property {typeof v5} v5
   */

  /**
   * An object with uuid's v1, v3, v4 and v5 functions.
   * @type {UUID}
   */

  var uuid = {
    v1: uuid$1.v1,
    v3: uuid$1.v3,
    v4: uuid$1.v4,
    v5: uuid$1.v5
  };
  /**
   * Installs UUID on Vue instance. It creates a property on Vue instance to
   * expose an object with uuid's v1, v3, v4 and v5 functions.
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

  exports["default"] = install;
  exports.uuid = uuid;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
