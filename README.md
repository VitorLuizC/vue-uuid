# Vue UUID

Add UUID to Vue instance.

[![Build Status](https://travis-ci.org/VitorLuizC/vue-uuid.svg?branch=master)](https://travis-ci.org/VitorLuizC/vue-uuid)

## Install

Installation is very easy, you just need to install using NPM or Yarn.

```sh
npm i vue-uuid
```

Vue's `use` method will do the trick adding to Vue.

```js
import Vue from "vue";
import UUID from "vue-uuid";

Vue.use(UUID);
```

## Usage

After installation `$uuid` is available on instance, so you can use inside
components **template** and script, like the example below.

```vue
<template>
  <div class="uuid-panel">
    <h3 class="uuid">{{ uuid }}</h3>
    <button
      class="button"
      @click="uuid = $uuid.v1()"
    >Generate V1</button>
    <button
      class="button"
      @click="uuid = $uuid.v3()"
    >Generate V3</button>
    <button
      class="button"
      @click="uuid = $uuid.v4()"
    >Generate V4</button>
    <button
      class="button"
      @click="uuid = $uuid.v5("Name 1", NAMESPACE)"
    >Generate V5</button>
  </div>
</template>

<script>
  import { uuid } from 'vue-uuid'; // uuid object is also exported to things
                                   // outside Vue instance.

  const NAMESPACE = "65f9af5d-f23f-4065-ac85-da725569fdcd";

  export default {
    data () {
      return {
        NAMESPACE,
        uuid: uuid.v1(),
        v1: this.$uuid.v1(),
        v3: this.$uuid.v3(),
        v4: this.$uuid.v4(),
        v5: this.$uuid.v5("Name 2", NAMESPACE)
      };
    }
  };
</script>
```
