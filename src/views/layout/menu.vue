<template>
    <el-aside width="260px">
        <el-menu :default-openeds="['1', '3']" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :unique-opened="true" :router="true">
            <el-submenu :index="item.id" v-for="item in menuData" :key="item.id">
                <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
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
export default {
    name: "Aside",
    props: {},
    components: {},
    data() {
        return {
            menuData,
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
};
</script>

<style scoped lang="scss">
.el-menu {
    height: 100%;
}
</style>
