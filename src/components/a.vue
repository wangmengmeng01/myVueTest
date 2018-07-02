<template>
  <div class="hello" >
      <div class="con">
        <h1>gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</h1>
        
      </div>
      <router-link to="/b">上一个</router-link>
  </div>
</template>

<script>
import qwe from "@/components/HelloWorld"
export default {
  components:{qwe},
  name: 'aaaa',
  props:["name","aa","age"],
  data () {
    return {
      // includedComponents:"a",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	console.log("x")
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
.con{
  width: 200px;
  height: 200px;
  border: 1px solid red;
  overflow: auto;
}
h1{
  width: 200px;
}
</style>
