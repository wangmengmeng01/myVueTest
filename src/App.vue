<template>
  <div id="app">
    <hello  v-bind.sync="obj" aa="afasd"></hello>
    <keep-alive include="bbbbbbbbb">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <h5>aaaaaaaaa</h5>
    <h6 @click="ins">{{count}}</h6>
    <p>{{$store.state.count}}</p>
    <i @click="increment">aaaaaaaaaaa</i>

    <div id="example-3">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated  bounceInUp"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="show">hello</p>
      </transition>
    </div>

  </div>
</template>

<script>
import hello from "./components/HelloWorld.vue"
import animate from '../node_modules/animate.css'
import { mapState,mapMutations } from 'vuex'
export default {
  components:{
    hello
  },
  name: 'App',
  data(){
    return {
      show:true,
      obj:{
        name:"www",
        age:10
      }
    }
  },
  created(){
    console.log(this.$route.meta.keepAlive)
  },
  computed:{
      ...mapState({
      count:"count"
    })
  },
  methods:{
    ...mapMutations([
      "increment"]),
    ...mapMutations({
      ins:"increment"
    }),
    add(){
      this.ins()
    }
  }
  
}
</script>

<style lang="scss" scoped>
$color1:red;
h5{
  color: $color1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
