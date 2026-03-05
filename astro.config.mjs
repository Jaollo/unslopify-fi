// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://jaollo.github.io',
	base: '/unslopify-fi',
	redirects: {
		'/aloitus/': '/',
		'/mika-on-unslopify/': '/',
		'/vaihe-1-puhdistus/': '/',
	},
	integrations: [
		starlight({
			title: 'Unslopify',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Jaollo/unslopify-windows' }],
			defaultLocale: 'root',
			locales: {
				root: { label: 'Suomi', lang: 'fi' },
			},
			tableOfContents: false,
			customCss: ['./src/styles/custom.css'],
			components: {
				TwoColumnContent: './src/components/TwoColumnContent.astro',
			},
			sidebar: [
				{
					label: 'Vaiheet',
					items: [
						{ label: 'Vaihe 1: Puhdistus', slug: '' },
						{ label: 'Vaihe 2: Parannukset', slug: 'vaihe-2-parannukset' },
						{ label: 'Vaihe 3: Jarjestelmaaly', slug: 'vaihe-3-jarjestelmaaly' },
					],
				},
				{ label: 'Ohjelmistokatalogi', slug: 'ohjelmistokatalogi' },
				{
					label: 'Hakemisto',
					items: [
						{ label: 'Windows-polut', slug: 'hakemisto/windows-polut' },
						{ label: 'Siivouskohteet', slug: 'hakemisto/siivouskohteet' },
					],
				},
				{ label: 'UKK', slug: 'ukk' },
			],
		}),
	],
});
