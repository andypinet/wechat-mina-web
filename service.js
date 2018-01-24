let app = {};

function initApp() {
    app = new Vue({
        el: '#app',
        template: `<app-main></app-main>`,
        data: {
            globalData: {
                message: 'Hello Vue!'
            }
        }
    });
}

function getApp(){
    return app;
}

window.initApp = initApp;
window.getApp = getApp;