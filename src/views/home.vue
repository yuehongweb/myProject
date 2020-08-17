<template>
    <div class="home">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <Aside />
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from './layout/menu.vue'
export default {
    name: "Home",
    props: {},
    components: {Aside},
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
};
</script>

<style scoped lang="scss">
$headerHeight: 120px;
.home {
    height: 100vh;
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: $headerHeight;
    height: $headerHeight !important;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    height: calc(100vh - 120px);
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
