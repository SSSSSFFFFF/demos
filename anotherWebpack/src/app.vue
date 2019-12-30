<template>
   <div>
       {a}
   </div>
</template>
<script>
export default {
   name: '',
   data() {
       return {
           a:'a'
       }
   },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
      console.log("a")
  },
  methods: {},
  watch: {},
}
</script>
<style scoped>
    body{
        color: violet;
    }
</style>
