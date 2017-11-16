<template>
  <div class="hello">
    hello!
  </div>
</template>


<script>
  import { getUser } from '../utils/http'

  export default {
    name: 'HelloWorld',
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        getUser({
          callback: (msg, data) => {
            console.log(msg, data)
          }
        })
      }
    }
  }
</script>

