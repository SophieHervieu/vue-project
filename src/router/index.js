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
        {
            path: '/lesson-inline-templating',
            name: 'Lesson-Inline-Templating',
            component: () => import('../views/lessons/InlineTemplating.vue')
        },
        {
            path: '/lesson-attribute-binding',
            name: 'Lesson-Attribute-Binding',
            component: () => import('../views/lessons/AttributeBinding.vue')
        },
        //! ----------------------------Exo Views routes ----------------------------
        {
            path: '/exo-interpolation',
            name: 'Exo-Interpolation',
            component: () => import('../views/exo/TextInterpolationExo.vue')
        },
        {
            path: '/exo-method-execution',
            name: 'Exo-Method-Execution',
            component: () => import('../views/exo/MethodExecutionComp.vue')
        },
        {
            path: '/exo-event-binding',
            name: 'Exo-Event-Binding',
            component: () => import('../views/exo/EventBinding.vue')
        },
        //! ----------------------------TP Views routes ----------------------------
        {
            path: '/tp-data-binding',
            name: 'Tp-Data-Binding',
            component: () => import('../views/tp/TpDataBinding.vue')
        },
    ]
});

export default router;