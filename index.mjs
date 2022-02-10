// @ts-check

import { v1, v3, v4, v5 } from "uuid";

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
export const uuid = { v1, v3, v4, v5 };

/**
 * @typedef {import('vue').App<HostElement>} App
 * @template HostElement
 */

/**
 * Defines '$uuid' property globally, to be accessed in any component instance
 * inside the application. The '$uuid' is an object with uuid's v1, v3, v4 and
 * v5 functions.
 *
 * @example
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
 * @param {App<HostElement>} app
 * @returns {App<HostElement>}
 * @template HostElement
 */
export default function withUUID(app) {
  app.config.globalProperties["$uuid"] = uuid;
  return app;
}
