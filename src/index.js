import easyMqMixin from './mixins/easyMqMixin'
import bootstrap4 from './config/bootstrap4'
import bootstrap3 from './config/bootstrap3'
import vuetify from './config/vuetify'

function install (Vue, options = {}) {
  const { debug, breakpoints } = options

  if (debug) {
    Vue.prototype[Symbol.for('$_debug')] = debug
    Vue.prototype[Symbol.for('$_debugDiv')] = document.createElement('div')
    Vue.prototype[Symbol.for('$_debugDiv')].innerHTML = ''
    Vue.prototype[Symbol.for('$_debugDiv')].style =
      'left: 10px; top: 10px; position: fixed; ' +
      'background-color: rgba(255, 255, 255, .9);' +
      'border: 1px solid rgba(0, 0, 0, 0.1);' +
      'font-size: 14px; z-index: 999999;'
  }

  if (Array.isArray(breakpoints) && breakpoints.length > 0) {
    var breaks = breakpoints.sort((a, b) => {
      return a[Object.keys(a)[0]] <= 0
        ? 1
        : b[Object.keys(b)[0]] <= 0
          ? -1
          : a[Object.keys(a)[0]] - b[Object.keys(b)[0]]
    })
  } else {
    switch (breakpoints) {
      case 'bootstrap4':
        breaks = bootstrap4
        break
      case 'bootstrap3':
        breaks = bootstrap3
        break
      case 'vuetify':
        breaks = vuetify
        break
      default:
        breaks = bootstrap4
    }
  }

  Vue.prototype.$mq = Vue.observable({
    breakpoints: breaks,
    width: 0,
    height: 0,
    media: '',
    gt: function (test) {
      for (let ind = 0; ind < this.breakpoints.length - 1; ind++) {
        if (Object.keys(this.breakpoints[ind])[0] === test) {
          return this.width >= this.breakpoints[ind][Object.keys(this.breakpoints[ind])[0]]
        }
      }
      return false
    },
    lt: function (test) {
      for (let ind = 1; ind < this.breakpoints.length; ind++) {
        if (Object.keys(this.breakpoints[ind])[0] === test) {
          return this.width <= this.breakpoints[ind - 1][Object.keys(this.breakpoints[ind - 1])[0]]
        }
      }
      return false
    },
    eq: function (test) {
      return test === this.media
    }
  })

  Vue.mixin(easyMqMixin)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export {
  easyMqMixin
}
