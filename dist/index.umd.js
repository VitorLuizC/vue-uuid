(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('uuid')) :
  typeof define === 'function' && define.amd ? define(['exports', 'uuid'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueUUID = {}, global.uuid$1));
})(this, (function (exports, uuid$1) { 'use strict';

  // @ts-check
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
   * @typedef {import('vue').App<HostElement>} App
   * @template HostElement
   */

  /**
   * Defines '$uuid' property globally, to be accessed in any component instance
   * inside the application. The '$uuid' is an object with uuid's v1, v3, v4 and
   * v5 functions.
   *
   * @example ```js
   * import Vue from 'vue';
   * import withUUID from 'vue-uuid';
   *
   * const app = withUUID(
   *   createApp({
   *     // ...
   *   }),
   * );
   *
   * app.component('c-button', {
   *   created() {
   *     this.id = this.$uuid.v4();
   *   }
   * });
   * ```
   * @param {App<HostElement>} app
   * @returns {App<HostElement>}
   * @template HostElement
   */

  function withUUID(app) {
    app.config.globalProperties["$uuid"] = uuid;
    return app;
  }

  exports["default"] = withUUID;
  exports.uuid = uuid;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
