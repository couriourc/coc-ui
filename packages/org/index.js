import Org from './lib/index.vue';

console.log(Org);
Org.install = function (app, componentName) {
    app.component(componentName ?? 'Org', Org);
};

export default Org;
