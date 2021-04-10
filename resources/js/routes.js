import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home')
    },
    {
        path: '/elections',
        name: "Elections",
        component: () => import('./views/Elections')
    },
    {
        path: '/elections/:electionId/candidates',
        name: "Candidates",
        component: () => import('./views/Candidates')
    },
    {
        path: '/:chatchAll(.*)',
        name: 'PageNotFound',
        component: () => import('./views/PageNotFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
