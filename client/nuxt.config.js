export default {
	plugins: [
		{ src: '~/plugins/init.server.js' }, // must be the first server plugin
		{ src: '~/plugins/fontawesome.js', mode: 'client' }
	],

	app: {
		head: {
			title: 'MEVN Stack Boilerplate - Client (Nuxt 3 with Pinia)',
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Concert+One&family=Rubik:wght@300;400;600;800&display=swap'
				}
			]
		}
	},

	css: [
		'bootstrap/dist/css/bootstrap.min.css',
		'~/assets/scss/mixins.scss',
		'~/assets/css/main.css',
		'~/assets/scss/main.scss',
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	modules: ['@pinia/nuxt'],

	pinia: {
		autoImports: [
			'defineStore', // import { defineStore } from 'pinia'
			['defineStore', 'definePiniaStore']
		]
	},

	compatibilityDate: '2025-02-14'
}
