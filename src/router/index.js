const APP = resolve => require(["@/pages/index.vue"], resolve);
const HOME = resolve => require(["@/pages/home/index.vue"], resolve);

export default [{
    path: "/",
    redirect: "/index"
}, {
    path: "/index",
    name: "index",
    component: APP,
    children: [{
        path: "",
        name: "home",
        component: HOME,
    }]
}]