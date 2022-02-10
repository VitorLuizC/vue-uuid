// @ts-check

import test from "ava";
import { v1, v3, v4, v5 } from "uuid";

import withUUID from "./index.mjs";

function createApp() {
  return {
    config: {
      globalProperties: {},
    },
  };
}

test("Exposes uuid as Vue's property $uuid", (context) => {
  const app = createApp();

  withUUID(/** @type {import('vue').App} */ (app));

  context.true(typeof app.config.globalProperties.$uuid === "object");
});

test("Exposed $uuid's methods v1, v3, v4 & v5 are UUID functions", (context) => {
  const app = createApp();

  withUUID(/** @type {import('vue').App} */ (app));

  context.is(app.config.globalProperties.$uuid.v1, v1);
  context.is(app.config.globalProperties.$uuid.v3, v3);
  context.is(app.config.globalProperties.$uuid.v4, v4);
  context.is(app.config.globalProperties.$uuid.v5, v5);
});
