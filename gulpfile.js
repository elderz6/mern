const gulp = require('gulp');
const git = require('gulp-git');

gulp.task('default', function()
{
  console.log('Gulp started...');
})

gulp.task('add', function()
{
  gulp.src('./*')
  .pipe(git.add());
});

gulp.task('commit', function()
{
  gulp.src('./*')
  .pipe(git.commit());
  done();
});

gulp.task('push', function()
{
  git.push('origin','master', function(err)
  {
    if (err) {
      throw err;
    }
    else {
      console.log('push success');
    }
  })
})
