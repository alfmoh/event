const gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  customMedia = require("postcss-custom-media");

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer, customMedia]))
    .on("error", function(err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
