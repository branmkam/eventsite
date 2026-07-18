import { defineConfig } from 'unocss';
import presetWind4 from '@unocss/preset-wind4';

export default defineConfig({
	presets: [presetWind4()],
	rules: [
		[
			/^font-modakLight$/,
			() => ({
				'font-family': '"Modak", cursive',
				'font-weight': '300',
			}),
		],
	],
	theme: {
		colors: {
			cerulean: '#007ba7',
			ceruleanLight: '#1fc3ff',
			brankamyellow: '#fec201',
			cherryred: '#ff2b2b',
			maingray: '#999999',
		},
		font: {
			modak: '"Modak", cursive',
			homenaje: '"Homenaje", serif',
		},
	},
});
