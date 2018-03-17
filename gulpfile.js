const gulp = require("gulp");
const crypto = require("crypto");
const file = require("gulp-file");
const tap = require("gulp-tap");
const ts = require("gulp-typescript");

const project = ts.createProject("./tsconfig.json");

let defs = {
  S_LOGIN: 9,
  S_SPAWN_DROPITEM: 6,
  S_DESPAWN_DROPITEM: 3,
  S_LOAD_TOPO: 3,
  S_MOUNT_VEHICLE: 2,
  S_UNMOUNT_VEHICLE: 2,
  S_CREATURE_LIFE: 2,
  S_SPAWN_ME: 2,
  C_PLAYER_LOCATION: 3
};
let files = {};

let mod = {
  servers: ["https://raw.githubusercontent.com/saegusae/loot/dist/"],
  supportUrl: "https://discord.gg/maqBmJV"
};

gulp.task("copy", function() {
  return gulp
    .src(["./README.md", "./src/config.json"])
    .pipe(
      tap(function(_) {
        files[_.basename] = crypto
          .createHash("sha256")
          .update(_.contents, "utf-8")
          .digest("hex");
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("generate", function() {
  return file("module.json", JSON.stringify(mod, null, 2), {
    src: true
  })
    .pipe(
      file(
        "manifest.json",
        JSON.stringify(
          {
            files: files,
            defs: defs
          },
          null,
          2
        )
      )
    )
    .pipe(gulp.dest("build"));
});

gulp.task("typescript", function() {
  return project
    .src()
    .pipe(project())
    .js.pipe(
      tap(function(_) {
        files[_.basename] = crypto
          .createHash("sha256")
          .update(_.contents, "utf-8")
          .digest("hex");
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("default", gulp.series("typescript", "copy", "generate"));
