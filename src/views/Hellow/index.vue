<template>
  <div class="hello">
    HelloWorld!
    <span class="a">1231</span>
  </div>
</template>

<script>
  import service from '../../utils/service'

  export default {
    name: 'HelloWorld',
    mounted () {
      this.testAjax({ compnayId: 1 })
    },
    methods: {
      testAjax: async (params) => {
        const res = await service.testAjax(params)
        const msg = res.msg
        const data = res.data
        console.log(msg, data)
      }
    }
  }
</script>

<style lang="less">
</style>
