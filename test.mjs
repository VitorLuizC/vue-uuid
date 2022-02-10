import test from "ava";
import { v1, v3, v4, v5 } from "uuid";

import install from "./index.mjs";

const generateVue = () => {
  class Vue {
    static use(install) {
      install(Vue);
    }
  }

  return Vue;
};

test("Exposes uuid as Vue's property $uuid", (context) => {
  const Vue = generateVue();

  Vue.use(install);

  context.true(typeof Vue.prototype.$uuid === "object");
});

test("Exposed $uuid's methods v1, v3, v4 & v5 are UUID functions", (context) => {
  const Vue = generateVue();

  Vue.use(install);

  context.is(Vue.prototype.$uuid.v1, v1);
  context.is(Vue.prototype.$uuid.v3, v3);
  context.is(Vue.prototype.$uuid.v4, v4);
  context.is(Vue.prototype.$uuid.v5, v5);
});
