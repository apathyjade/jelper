
import gulp from 'gulp';
import type { CopyOpts } from '../types.js';

export default (opts: CopyOpts) => {
  gulp.src(opts.input)
    .pipe(gulp.dest(opts.output));
}
