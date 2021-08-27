const routes = [
    // 和admin-element-vue一样，菜单是通过路由动态生成的，但是也有问题存在
    // 问题在于
    // 这样写的话，父路由并没有被使用到，而且，父路由并没有router-view，所以有时候会出问题,这里想把子路由都渲染到根组件？
    {
        path:"/",
        component:()=>import("@/view/home.vue"),
        children:[
            {
                path:"",
                component:()=>import("@/view/dashboard.vue"),
                meta:{
                    title:"系统监控",
                    icon:"dashboard",
                    key:1
                },
                children:[
                    {
                        path:"/dashboard",
                        component:()=>import("@/view/dashboard.vue"),
                        meta:{
                            title:"仪表盘",
                            icon:"mail",
                            key:2
                        }
                    },
                    // {
                    //     path:"/map",
                    //     component:()=>import("@/view/map.vue"),
                    //     meta:{
                    //         title:"地图",
                    //         icon:"layout",
                    //         key:3
                    //     },
                    // }
                    {
                        path:"/user",
                        component:()=>import("@/view/user.vue"),
                        meta:{
                            title:"地图",
                            icon:"notification",
                            key:3
                        },
                    }
                ]
            },
            {
                path:"",
                component:()=>import("@/view/user.vue"),
                meta:{
                    title:"用户管理",
                    icon:"like",
                    key:4
                },
                children:[
                    {
                        path:"/userManage",
                        component:()=>import("@/view/user.vue"),
                        meta:{
                            title:"用户列表",
                            icon:"notification",
                            key:5
                        },
                    }
                ]
            },
            {
                path:"warning",
                component:()=>import("@/view/warning.vue"),
                meta:{
                    title:"主动报警",
                    icon:"sound",
                    key:6
                }
            },
            {
                path:"playback",
                component:()=>import("@/view/playback.vue"),
                meta:{
                    title:"视频回放",
                    icon:"rocket",
                    key:7
                }
            },
            {
                path:"configuration",
                component:()=>import("@/view/configuration.vue"),
                meta:{
                    title:"配置管理",
                    icon:"setting",
                    key:8
                }
            },
            {
                path:"system",
                component:()=>import("@/view/system"),
                meta:{
                    title:"系统管理",
                    icon:"tool",
                    key:9
                }
            }
        ]
    }
]

export default routes;