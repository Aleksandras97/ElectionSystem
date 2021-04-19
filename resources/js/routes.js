import { createRouter, createWebHashHistory } from "vue-router";
import store from './store';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elections',
        name: "Elections",
        component: () => import('./views/Elections'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elections/:electionId/candidates',
        name: "Candidates",
        component: () => import('./views/Candidates'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login'),
        meta: {
            requiresVisitor: true
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('./views/Logout'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('./views/Admin'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin/:electionId/candidates',
        name: "AdminCandidates",
        component: () => import('./views/AdminCandidates'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:chatchAll(.*)',
        name: 'PageNotFound',
        component: () => import('./views/PageNotFound'),
        meta: {
            requiresVisitor: true
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach( async (to, from , next) => {


    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!store.getters.authenticated) {
            next({
                name: 'Login',
            })
        } else {
            next()
        }

    } else if (to.matched.some(record => record.meta.requiresVisitor)) {

        if(store.getters.authenticated) {
            next({
                name: 'Home',
            })
        } else {
            next()
        }

    } else {
        next()
    }
})

export default router
