<template>
  <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <template v-for="item in routes">

            <a-sub-menu :key="item.meta.key" v-if="item.children !==undefined">
                <span slot="title">
                    <a-icon :type="item.meta.icon" />
                    <span>{{item.meta.title}}</span>
                </span>
                <tree :routes="item.children"/>
            </a-sub-menu>

            <a-menu-item v-else :key="item.meta.key" @click="to_page(item.path)">
                <a-icon :type="item.meta.icon" />
                <span>{{item.meta.title}}</span>
            </a-menu-item>

        </template>
        
    </a-menu>
</template>

<script>
export default {
    name:"tree",
    data:function(){
        return{}
    },
    props:{
        routes:{
            type:Array,
            require:true
        }
    },
    methods:{
        to_page:function(path){
            this.$router.push(path)
        }
    }
}
</script>

<style>

</style>