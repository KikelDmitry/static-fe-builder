'use strict';

import { src, dest } from 'gulp';

export const fonts = () => {
	return src(globs.fonts, { encoding: false }).pipe(dest(config.dest + 'fonts'));
};
