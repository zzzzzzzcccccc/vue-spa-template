<template>
  <div class="hello">
    HelloWorld!
    <span class="a">1231</span>
  </div>
</template>

<script>
  import { testAjax } from '../../utils/service'

  export default {
    name: 'HelloWorld',
    mounted () {
      this.ajaxDemo()
    },
    methods: {
      ajaxDemo: async (params) => {
        const { data, msg } = await testAjax(params || {})
        console.log(msg, data)
      }
    }
  }
</script>

<style lang="less">
</style>
