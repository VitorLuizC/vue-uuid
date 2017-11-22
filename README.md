# Vue UUID

Add UUID to Vue instance.

## Install

Installation is very easy, you just need to install using NPM or Yarn.

```sh
npm i vue-uuid
```

Vue's `use` method will do the trick adding to Vue.

```js
import Vue from 'vue'
import UUID from 'vue-uuid'

Vue.use(UUID)
```

## Usage

After installation `$uuid` is available on instance, so you can use inside
components **template** and script, like the example below.

```html
<template>
  <div class="uuid-panel">
    <h3 class="uuid">{{ uuid }}</h3>
    <button
      class="button"
      @click="uuid = $uuid.v1()"
    >Generate V1</button>
    <button
      class="button"
      @click="uuid = $uuid.v4()"
    >Generate V4</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        uuid: this.$uuid() // is equals to this.$uuid.v4()
      }
    }
  }
</script>
```
