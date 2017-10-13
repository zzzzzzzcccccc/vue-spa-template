<template>
  <div class="hello">
    HelloWorld!
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
        const data = await service.testAjax(params)
        console.log(data)
      }
    }
  }
</script>
