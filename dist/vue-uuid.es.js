/*!
 * vue-uuid v1.1.1
 * (c) 2017-present Vitor Luiz Cavalcanti
 * Released under the MIT License.
 */
import v1 from 'uuid/v1';
import v4 from 'uuid/v4';
import v5 from 'uuid/v5';

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

export default install;
export { uuid };
