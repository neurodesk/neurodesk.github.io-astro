// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
	site: 'https://neurodesk.org',
	integrations: [
		starlight({
			title: 'Neurodesk',
			description: 'A community-oriented open-source platform for reproducible neuroimaging analysis.',
			logo: {
				light: './src/assets/neurodesk-wordmark-light.svg',
				dark: './src/assets/neurodesk-wordmark-dark.svg',
				replacesTitle: true,
			},
			favicon: '/favicons/favicon.ico',
			head: [
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' } },
				{ tag: 'link', attrs: { rel: 'manifest', href: '/favicons/site.webmanifest' } },
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/NeuroDesk' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/neurodesk-org/' },
			],
			editLink: {
				baseUrl: 'https://github.com/NeuroDesk/neurodesk.github.io/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Overview', link: '/getting-started/' },
						{
							label: 'Local',
							items: [{ autogenerate: { directory: 'getting-started/local' } }],
						},
						{
							label: 'Hosted',
							items: [{ autogenerate: { directory: 'getting-started/hosted' } }],
						},
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
		react(),
		mdx(),
	],
});
