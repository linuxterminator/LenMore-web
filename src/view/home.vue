<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <tree :routes="getRoutes"/>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{background: '#fff', height: '100%' ,width:'100%'}">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        power by huqingshan
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import tree from "@/components/tree"
export default {
  data() {
    return {
      collapsed: false,
      total:10
    }
  },
  components:{
    tree:tree,
  },
  computed:{
      getRoutes:function(){
          return this.$router.options.routes[0].children
      }
  },
  created:function(){
    //   http.get("/article").then(res=>console.log(res))
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
main{
    display: flex;
    flex-direction: column;
}
</style>
