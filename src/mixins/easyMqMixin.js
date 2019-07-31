
const easyMqMixin = {
  mounted () {
    this.$nextTick(function () {
      if (this[Symbol.for('$_debug')]) {
        document.body.appendChild(this[Symbol.for('$_debugDiv')])
      }
      window.addEventListener('resize', this.$_getWindowSize)
      this.$_getWindowSize()
    })
  },
  methods: {
    $_getWindowSize: function (event) {
      const width = window.innerWidth && document.documentElement.clientWidth
        ? Math.min(window.innerWidth, document.documentElement.clientWidth)
        : window.innerWidth ||
          document.documentElement.clientWidth ||
        document.getElementsByTagName('body')[0].clientWidth
      const height = window.innerHeight && document.documentElement.clientHeight
        ? Math.min(window.innerHeight, document.documentElement.clientHeight)
        : window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName('body')[0].clientHeight

      this.$mq.width = (width * window.devicePixelRatio).toFixed(0)
      this.$mq.height = (height * window.devicePixelRatio).toFixed(0)

      const matching = this.$mq.breakpoints.filter(
        query => query[Object.keys(query)[0]] >= this.$mq.width || query[Object.keys(query)[0]] <= 0
      )

      this.$mq.media = matching.length === 0
        ? ''
        : Object.keys(matching[0])[0]

      if (this[Symbol.for('$_debug')]) {
        this[Symbol.for('$_debugDiv')].innerHTML = ` ${this.$mq.width}px x ${this.$mq.height}px <br /> Match: ${this.$mq.media}`
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.$_getWindowSize)
  }
}

export default easyMqMixin
