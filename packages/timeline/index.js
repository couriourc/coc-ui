import Timeline from './lib/index.vue';

Timeline.install = function (app, componentName) {
    app.component(componentName ?? 'Org', Timeline);
};

export default Timeline;
