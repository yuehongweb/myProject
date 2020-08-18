<template>
    <div class="Header">
        <div class="navBar">
            <!-- 控制侧边栏水平折叠的按钮 -->
            <div class="toggleCollapse" @click="toggleCollapse">
                <i class="el-icon-s-fold" v-show="!collapse"></i>
                <i class="el-icon-s-unfold" v-show="collapse"></i>
                <!-- 面包屑 -->
                <div class="breadcrumb">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <a href="/">活动管理</a>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>

            <!-- 个人信息 -->
            <div class="userInfo">
                <div class="name">{{userInfo.name}}</div>
                <div class="logout">退出</div>
            </div>
        </div>

        <!-- 标签页 -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Header",
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["userInfo", "collapse"])
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
        // 切换水平展开菜单
        toggleCollapse() {
            this.$store.dispatch("toggleCollapse");
        }
    }
};
</script>

<style scoped lang="scss">
$headerHeight: 120px;
.Header {
    // background-color: #b3c0d1;
    color: #333;
    height: $headerHeight !important;
    width: 100%;
    .navBar {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .toggleCollapse {
            width: 60%;
            cursor: pointer;
            line-height: 60px;
            display: flex;
            i {
                font-size: 30px;
            }
        }
        .breadcrumb {
            margin-left: 20px;
            width: 80%;
            .el-breadcrumb {
                line-height: 50px;
            }
        }
        .userInfo {
            width: 50px;
            line-height: 50px;
        }
    }
}
</style>
