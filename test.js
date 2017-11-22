import test from 'ava'
import install from './'

const generateVue = () => {
  class Vue {
    static use (install) {
      install(Vue)
    }
  }

  return Vue
}

test('Exposes uuid as Vue\'s property $uuid', (context) => {
  const Vue = generateVue()

  Vue.use(install)

  context.true(typeof Vue.prototype.$uuid === 'object')
})

test('Exposed $uuid has v1, v4 & v5', (context) => {
  const Vue = generateVue()

  Vue.use(install)

  context.true(typeof Vue.prototype.$uuid.v1 === 'function')
  context.true(typeof Vue.prototype.$uuid.v4 === 'function')
  context.true(typeof Vue.prototype.$uuid.v5 === 'function')
})
