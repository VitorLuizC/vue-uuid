import v1 from 'uuid/v1';
import v4 from 'uuid/v4';
import v5 from 'uuid/v5';

var uuid = { v1: v1, v4: v4, v5: v5 };

var install = function (Vue) {
  Vue.prototype.$uuid = uuid;
};

export { uuid };
export default install;
