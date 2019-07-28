<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Try to resize the window to observe the exposed $mq object properties:</p>
    <ul>
      <li>Width: {{$mq.width}}</li>
      <li>Height: {{$mq.height}}</li>
      <li>Match: {{$mq.media}}</li>
      <li>Eq md: {{$mq.eq('md')}}</li>
      <li>Gt md: {{$mq.gt('md')}}</li>
      <li>Lt md: {{$mq.lt('md')}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShowProperties',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
