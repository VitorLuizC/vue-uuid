/*!
 * vue-uuid v1.0.0
 * (c) 2017-present Vitor Luiz Cavalcanti
 * Released under the MIT License.
 */
import v1 from 'uuid/v1';
import v4 from 'uuid/v4';
import v5 from 'uuid/v5';

var uuid = {
  v1: v1,
  v4: v4,
  v5: v5
};
function install(Vue) {
  Vue.prototype.$uuid = uuid;
}

export default install;
export { uuid };
