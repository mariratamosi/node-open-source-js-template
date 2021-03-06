const { src, dest, series } = require("gulp");

const babel = require("gulp-babel");
const mocha = require("gulp-mocha");

var gulp = require("gulp");

var source = require("vinyl-source-stream");
var browserify = require("browserify");
const babelify = require("babelify");

gulp.task("test", function () {
  return gulp.src("src/test/**/*.js", { read: false }).pipe(
    mocha({
      require: ["@babel/register"],
      reporter: "spec",
    })
  );
});

gulp.task("browserify", async () => {
  await browserify({
    entries: ["./src/main/app.js"],
    standalone: "Dispatch",
  })
    .transform(babelify.configure({ presets: ["@babel/env"] }))
    .bundle()
    .on("error", (err) => console.log(err))
    .pipe(source("app.js"))
    .pipe(gulp.dest("dist"));
});

exports.default = gulp.series("test", "browserify");
