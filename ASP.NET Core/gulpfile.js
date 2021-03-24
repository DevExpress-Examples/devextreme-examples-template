/// <binding Clean='clean' />
var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat");

var paths = {
    webroot: "./wwwroot/"
};

paths.concatJsDest = paths.webroot + "js/vendor.js";
paths.concatCssDest = paths.webroot + "css/vendor.css";
paths.fonts = paths.webroot + "css/fonts";
paths.icons = paths.webroot + "css/icons";

let scripts = ["node_modules/jquery/dist/jquery.js",
    "node_modules/bootstrap/dist/js/bootstrap.js",
    "node_modules/devextreme/dist/js/dx.all.js",
    "node_modules/devextreme/aspnet.js",
    "node_modules/devextreme-aspnet-data/js/dx.aspnet.data.js"];

let styles = [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/devextreme/dist/css/dx.common.css",
    "node_modules/devextreme/dist/css/dx.material.blue.light.compact.css"];


gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});
gulp.task("clean:icons", function (cb) {
    rimraf(paths.icons, cb);
});
gulp.task("clean:fonts", function (cb) {
    rimraf(paths.fonts, cb);
});

gulp.task("clean", gulp.series(["clean:js", "clean:css", "clean:icons", "clean:fonts"]));

gulp.task("add:js", function () {
    return gulp.src(scripts, { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(gulp.dest("."));
});

gulp.task("add:css", function () {
    return gulp.src(styles)
        .pipe(concat(paths.concatCssDest))
        .pipe(gulp.dest("."));
});

gulp.task("add:icons", function () {
    return gulp.src(["node_modules/devextreme/dist/css/icons/*"]).pipe(gulp.dest(paths.icons));
})
gulp.task("add:fonts", function () {
    return gulp.src(["node_modules/devextreme/dist/css/fonts/*"]).pipe(gulp.dest(paths.fonts));
})

gulp.task("add-resources", gulp.series(["add:js", "add:css", "add:icons", "add:fonts"]));