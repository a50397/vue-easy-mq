# vue-easy-mq

Yet another simple and easy to use media query plugin for Vue

## Usage

Install vue-easy-mq

```
npm i vue-easy-mq --save
```

Import and cofigure vue-easy-mq

```import Vue from 'vue
import vueEasyMq from 'vue-easy-mq'

Vue.use(vueEasyMq, { debug: true, breakpoints: 'vuetify' })
```

Use vue-easy-mq inside your code or template
```
if (this.$mq.width > 1000 && this.$mq.height > 500) {
  
}

if (this.$mq.media === 'xs'){
  ...
}

if (this.$mq.gt('sm')) {
  ...
}
```

## Reference
```
Vue.use(easyVueMq, options)

options: {
  debug: true,
  breakpoints: 'bootstrap4'
}
```
debug: Boolean - should a debug div be displayed at the top left corner of the window with width, height and matched media info

breakpoints: can be 'bootstrap3, 'bootstrap4', 'vuetify', or can be an array. If nothing or an empty array is provided, 'bootstrap4' will be used 
```
options: {
  breakpoints: [
    { break1: max-width in px },
    { break2: max-width in px },
    { break3: max-width in px },
    { break4: 0 /* no max-width */ }
  ]
}
```

Exposes $mq object
```
this.$mq = {
  width,          // detected width
  height,         // detected height
  media,          // matched width media breakpoint according to the breakpoints definition
  eq(break1),     // width is equal-than breakpoint, returns boolean
  lt(break2),     // width is less-than breakpoint, returns boolean
  gt(break3)      // width is greater-than breakpoint, returns boolean
}
```

## License

MIT
