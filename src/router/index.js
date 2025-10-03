import {createRouter, createWebHistory} from 'vue-router'
import AppLayout from "../layouts/AppLayout.vue"
import Welcome from "../components/Welcome.vue"
import ClassSchedulePage from "../views/ClassSchedulePage.vue"
import Administration from "../views/Administration.vue";


const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: Welcome,
            },
            {
                path: 'jadwal-kuliah',
                name: 'classSchedule',
                component: ClassSchedulePage,
            },
            {
                path: 'administrasi',
                name: 'Administration',
                component: Administration,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router