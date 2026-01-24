import { defineConfig } from 'unocss';
import presetWind4 from '@unocss/preset-wind4';

export default defineConfig({
	presets: [presetWind4()],
	theme: {
		colors: {
			cerulean: '#007ba7',
			brankamyellow: '#fec201',
			cherryred: '#ff2b2b',
			maingray: '#999999',
		},
		font: {
			averia: '"Averia Libre", cursive',
			homenaje: '"Homenaje", serif',
		},
	},
});
