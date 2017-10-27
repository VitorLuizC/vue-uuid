import uuid from 'uuid'

const install = (Vue) => {
  Vue.prototype.$uuid = uuid
}

export default install
