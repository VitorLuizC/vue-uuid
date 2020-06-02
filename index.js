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
export default function install(Vue) {
  Vue.prototype.$uuid = uuid;
}
