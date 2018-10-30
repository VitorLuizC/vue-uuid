import Vue from 'vue';
import v1 from 'uuid/v1';
import v4 from 'uuid/v4';
import v5 from 'uuid/v5';

export interface UUID {
  v1: typeof v1;
  v4: typeof v4;
  v5: typeof v5;
}

declare module 'vue/types/vue' {
  interface VueConstructor {

    /**
     * An object with uuid's v1, v4 and v5 functions.
     */
    $uuid: UUID;
  }
}

/**
 * An object with uuid's v1, v4 and v5 functions.
 */
export const uuid: UUID;

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
 * @param Vue - Vue constructor.
 */
export default function install (Vue: Vue): void;
