import components from './src/components';
import router from "./src/router";


const install = Vue => {
    components.forEach(item => Vue.component(item.name, item.component));
}

const API = {
    install,
    getRouter: () => router,
    installModule(m) {
        if (m.routes) {
            router.addRoutes(m.routes);
        }
    }
};

export default API;
