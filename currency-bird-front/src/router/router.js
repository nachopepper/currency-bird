import Vue from 'vue';
import VueRouter from 'vue-router';
import GenerateLink from '../components/GenerateLink';
import Invite from '../components/Invite';
import ReferedComponent from '../components/ReferedComponent';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: GenerateLink },
        { path: '/register/invite/:id', component: Invite },
        { path: '/gestion', component: ReferedComponent },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            redirect: '/'
        },
    ]
})


export default router;