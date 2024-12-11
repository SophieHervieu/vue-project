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
            path: '/lesson-router',
            name: 'Lesson-Router',
            component: () => import('../views/exo/LessonRouterView.vue')
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: () => import('../components/DetailsPage.vue'),
            props: true
        },
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
        {
            path: '/lesson-list-rendering',
            name: 'Lesson-List-Rendering',
            component: () => import('../views/lessons/LessonListRendering.vue')
        },
        {
            path: '/lesson-methods',
            name: 'Lesson-Methods',
            component: () => import('../views/lessons/LessonMethods.vue')
        },
        {
            path: '/lesson-event-binding',
            name: 'Lesson-Event-Binding',
            component: () => import('../views/lessons/LessonEventBindingView.vue')
        },
        {
            path: '/lesson-two-way-binding',
            name: 'Lesson-Two-Way-Binding',
            component: () => import('../views/lessons/LessonTwoWayBinding.vue')
        },
        {
            path: '/lesson-computed-properties',
            name: 'Lesson-Computed-Properties',
            component: () => import('../views/lessons/LessonComputedProperties.vue')
        },
        {
            path: '/lesson-watchers',
            name: 'Lesson-Watchers',
            component: () => import('../views/lessons/LessonWatchers.vue')
        },
        {
            path: '/lesson-dynamic-styling',
            name: 'Lesson-Dynamic-Styling',
            component: () => import('../views/lessons/LessonDynamicStyling.vue')
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
        {
            path: '/exo-two-way-data-binding',
            name: 'Exo-Two-Way-Data-Binding',
            component: () => import('../views/exo/TwoWayDataBinding.vue')
        },
        {
            path: '/exo-conditional-rendering',
            name: 'Exo-Conditional-Rendering',
            component: () => import('../views/exo/ConditionalRendering.vue')
        },
        {
            path: '/exo-watchers',
            name: 'Exo-Watchers',
            component: () => import('../views/exo/Watchers.vue')
        },
        {
            path: '/exo-dynamic-styling',
            name: 'Exo-Dynamic-Styling',
            component: () => import('../views/exo/DynamicStyling.vue')
        },
        {
            path: '/exo-dynamic-styling-class',
            name: 'Exo-Dynamic-Styling-Class',
            component: () => import('../views/exo/DynamicStylingClasses.vue')
        },
        {
            path: '/exo-list-rendering',
            name: 'Exo-List-Rendering',
            component: () => import('../views/exo/ListRendering.vue')
        },
        {
            path: '/exo-props',
            name: 'Exo-Props',
            component: () => import('../views/exo/Props.vue')
        },
        {
            path: '/exo-props-emit',
            name: 'Exo-Props-Emit',
            component: () => import('../views/exo/AllFriends.vue')
        },
        {
            path: '/exo-api-fetch',
            name: 'Exo-Api-Fetch',
            component: () => import('../views/exo/ApiFetch.vue')
        },
        //! ----------------------------TP Views routes ----------------------------
        {
            path: '/tp-data-binding',
            name: 'Tp-Data-Binding',
            component: () => import('../views/tp/TpDataBinding.vue')
        },
        {
            path: '/tp-event-binding',
            name: 'Tp-Event-Binding',
            component: () => import('../views/tp/TpEventBinding.vue')
        },
        {
            path: '/tp-reactivity',
            name: 'Tp-Reactivity',
            component: () => import('../views/tp/Reactivity.vue')
        },
        {
            path: '/tp-dynamic-styling',
            name: 'Tp-Dynamic-Styling',
            component: () => import('../views/tp/DynamicStyling.vue')
        },
        {
            path: '/tp-list-rendering',
            name: 'Tp-List-Rendering',
            component: () => import('../views/tp/TpListRendering.vue')
        },
    ]
});

export default router;