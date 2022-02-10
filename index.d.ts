import type { App } from "vue";
import type { v1, v3, v4, v5 } from "uuid";

export interface UUID {
  v1: typeof v1;
  v3: typeof v3;
  v4: typeof v4;
  v5: typeof v5;
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    /**
     * An object with uuid's v1, v3, v4 and v5 functions.
     */
    $uuid: UUID;
  }
}

/**
 * An object with uuid's v1, v3, v4 and v5 functions.
 */
export const uuid: UUID;

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
 */
export default function withUUID<HostElement = any>(
  app: App<HostElement>
): App<HostElement>;
