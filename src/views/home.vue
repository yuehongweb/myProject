<template>
    <div class="home">
        <el-container>
            <!-- 侧边栏 -->
            <Aside />
            <div class="content">
                <!-- 头部 -->
                <Header />
                <!-- 主体 -->
                <div class="main">
                    <keep-alive>
                        <router-view />
                    </keep-alive>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
import Aside from "./layout/menu.vue";
import Header from "./layout/header.vue";
export default {
    name: "Home",
    props: {},
    components: { Aside, Header },
    data() {
        return {
            // 是否水平折叠收起菜单
            collapse: false
        };
    },
    computed: {},
    created() {},
    mounted() {
        console.log(this.$store, "this.$store");
    },
    watch: {},
    methods: {}
};
</script>

<style scoped lang="scss">

.home {
    height: 100vh;
}
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.main {
    display: block;
    height: calc(100vh - 120px);
}
.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    height: 100vh;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    height: calc(100vh - 120px);
}

body > .el-container {
    margin-bottom: 40px;
}
</style>
