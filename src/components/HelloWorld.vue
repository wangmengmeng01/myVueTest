<template>
  <div class="hello" >
   fffffffffffffffffffff
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["name","aa","age"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	
  },
  mounted(){
  	console.log(this.name)
  	console.log(this.aa)
  	this.$emit("update:name","sss")
  	console.log(this.$listeners)
  	console.log(this.$attrs,"aaaaaa")
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
