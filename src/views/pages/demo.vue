<template>
  <div class="hello">
    hello!
    <button>hello</button>
  </div>
</template>


<script>
  import { getUser } from '../../utils/http'

  export default {
    name: 'HelloWorld',
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        getUser({cb: (msg, data) => {
            console.log(msg, data)
          }
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .hello
    color yellow
    button
     color red
     background blue
</style>
