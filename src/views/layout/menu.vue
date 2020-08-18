<template>
    <el-aside :class="{aside:true,sideWidth:collapse}">
        <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true"
            :router="true"
            :collapse="collapse"
            mode="vertical"
            :collapse-transition="false"
        >
            <el-submenu :index="item.id" v-for="item in menuData" :key="item.id">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.name }}</span>
                </template>
                <el-menu-item-group v-if="item.children.length != 0">
                    <template v-for="submenu in item.children">
                        <el-menu-item :index="submenu.path" :key="submenu.id">{{ submenu.name }}</el-menu-item>
                    </template>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
import menuData from "@asset/js/menu.json";
import { mapGetters } from 'vuex'
export default {
    name: "Aside",
    props: {
    },
    components: {},
    data() {
        return {
            menuData
        };
    },
    computed: {
         ...mapGetters([
      'collapse',
    ])
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {}
};
</script>

<style scoped lang="scss">
.aside {
    width: 260px !important;
    .el-menu {
        height: 100%;
        .el-menu-vertical:not(.el-menu--collapse) {
            width: 260px;
            min-height: 400px;
        }
    }
}
.sideWidth{
    width: 64px !important;
}
</style>
