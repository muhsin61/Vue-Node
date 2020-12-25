<template>
  <div>
    <div class="test" @click="handleClick">{{name}}</div>
    <ChildApp/>
  </div>
</template>
<script>
import ChildApp from "./App1";  
export default {
  components: { ChildApp },
  name: "root-app",
  data: function(){
      return{
          name: "test"
      }
  },
  methods:{
    handleClick(){
      console.log("clicked")
    }
  }
}
</script>
<style>
 .test{
   color: tomato;
 }
</style>
