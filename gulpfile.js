'use strict';

import { src, dest, parallel, series, watch } from 'gulp';
import bs from './builder/tasks/browser-sync.js';
import { fonts } from './builder/tasks/fonts.js';

// prettier-ignore
// const build = series(
// );

// prettier-ignore
const dev = parallel(
	bs,
);

export { dev };
