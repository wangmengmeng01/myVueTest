<template>
  <div class="hello" >
   <router-link to="/a">下一个</router-link>
   <input type="number" oninput="if(value.length>5)value=value.slice(0,5)" />  

   邮箱：<input type="email"/>
  </div>
</template>

<script>
import qw from "@/components/HelloWorld"
export default {
  components:{qw},
  name: 'bbbbbbbbb',
  props:["name","aa","age"],
  data () {
    return {
      // includedComponents:"b",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	console.log("xx")
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
