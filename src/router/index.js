import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        //! ----------------------------Lessons Views routes ----------------------------
        {
            path: '/lesson-interpolation',
            name: 'Lesson-Interpolation',
            component: () => import('../views/lessons/LessonTextInterpolation.vue')
        },
        //! ----------------------------Exo Views routes ----------------------------
        {
            path: '/exo-interpolation',
            name: 'Exo-Interpolation',
            component: () => import('../views/exo/TextInterpolationExo.vue')
        },
    ]
});

export default router;