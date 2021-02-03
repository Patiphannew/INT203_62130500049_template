const app = {
    data() {
        return {
            message: 'Hello',
            name: 'Vue3'
        }
    }
}
mountedApp = Vue.createApp(app).mount('#app')