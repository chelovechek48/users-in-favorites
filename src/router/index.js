import { createRouter, createWebHistory } from 'vue-router';
import UsersInfo from '@pages/UsersInfo.vue';
import FavoritesUsers from '@pages/FavoritesUsers.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/users', name: 'users', component: UsersInfo },
		{ path: '/favorites', name: 'favorites', component: FavoritesUsers },
		{ path: '/:pathMatch(.*)*', redirect: '/users' }
	],
});

export default router;
