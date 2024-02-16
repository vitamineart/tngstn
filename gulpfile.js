/**
 *   Gulp with TailwindCSS - An CSS Utility framework
 *   Author : Manjunath G
 *   URL : manjumjn.com | lazymozek.com
 *   Twitter : twitter.com/manju_mjn
 **/

/*
  Usage:
  1. npm install //To install all dev dependencies of package
  2. npm run dev //To start development and server for live preview
  3. npm run prod //To generate minifed files for live server
*/

const { src, dest, task, watch, series, parallel, lastRun } = require("gulp");
const del = require("del"); //For Cleaning build/dist for fresh export
const options = require("./config"); //paths and other options from config.js
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass")); //For Compiling SASS files
const postcss = require("gulp-postcss"); //For Compiling tailwind utilities with tailwind config
const concat = require("gulp-concat"); //For Concatinating js,css files
const uglify = require("gulp-terser"); //To Minify JS files
const cleanCSS = require("gulp-clean-css"); //To Minify CSS files
const purgecss = require("gulp-purgecss"); // Remove Unused CSS from Styles
const critical = require("critical").stream;
const size = require("gulp-size");
const pug = require("gulp-pug");
const cached = require("gulp-cached");
const remember = require("gulp-remember");
const plumber = require("gulp-plumber");
const htmlmin = require("gulp-htmlmin");
const notify = require("gulp-notify");
const svgSprite = require("gulp-svg-sprite");
const webp = require("gulp-webp"); //For converting images to WebP format
const replace = require("gulp-replace"); //For Replacing media formats to webp in html
const newer = require("gulp-newer"); //For Symbolic Console logs :) :P
const logSymbols = require("log-symbols");
const rename = require("gulp-rename"); //For Symbolic Console logs :) :P

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base,
      // index: "dist/index.html",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    port: options.config.port || 5000,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    },
    logPrefix: "Tungsten Development",
    logFileChanges: true,
    reloadOnRestart: true
  });
  done();
}

// Triggers Browser reload
function previewReload(done) {
  console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

//Development Tasks
function devHTML() {
  return (
    src(`${options.paths.src.base}/pug/*.pug`, { since: lastRun(devHTML) })
      // .pipe(cached("devHTML"))
      .pipe(
        plumber({
          errorHandler: notify.onError(error => ({
            title: "Pug",
            message: error.message
          }))
        })
      )
      .pipe(
        pug({
          pretty: true,
          verbose: true,
          locals: {
            require: require
          }
        })
      )
      // .pipe(          // making separate directory for each page with index.html in each
      //   rename(function (path) {
      //     // Updates the object in-place
      //     console.log(path.dirname);
      //     if (path.basename !== "index") {
      //       path.dirname = `pages/${path.basename}`;
      //       path.basename = `index`;
      //     }
      //   })
      // )
      // .pipe(remember("devHTML"))
      .pipe(dest(options.paths.dist.base))
  );
}

function compileChunks() {
  return (
    src(`${options.paths.src.base}/pug/*.pug`)
      // .pipe(cached("compileChunks"))
      .pipe(
        plumber({
          errorHandler: notify.onError(error => ({
            title: "Pug",
            message: error.message
          }))
        })
      )
      .pipe(
        pug({
          verbose: true
        })
      )
      // .pipe(remember("compileChunks"))
      .pipe(dest(options.paths.dist.base))
  );
}

function devStyles() {
  const tailwindcss = require("tailwindcss");
  return (
    src(`${options.paths.src.css}/**/*.scss`)
      .pipe(sass().on("error", sass.logError))
      .pipe(dest(options.paths.src.css))
      .pipe(postcss([tailwindcss(options.config.tailwindjs), require("autoprefixer")]))
      .pipe(concat({ path: "style.css" }))
      // .pipe(cleanCSS())
      .pipe(dest(options.paths.dist.css))
      .pipe(browserSync.stream())
  );
}

function devScripts() {
  return src(`${options.paths.src.js}/**/*.js`).pipe(dest(options.paths.dist.js));
}

function devImages() {
  return src([`${options.paths.src.media}/**/*`, `!${options.paths.src.media}/icons/**`, `!${options.paths.src.media}/icons`])
    .pipe(newer(options.paths.dist.media))
    .pipe(dest(options.paths.dist.media));
}

function devFonts() {
  return src(`${options.paths.src.fonts}/*`).pipe(dest(options.paths.dist.fonts));
}
// function devFavicon() {
//   return src([
//     `${options.paths.src.base}/apple-touch-icon.png`,
//     `${options.paths.src.base}/favicon.png`,
//     `${options.paths.src.base}/favicon.svg`,
//     `${options.paths.src.base}/mask-icon.svg`,
//   ])
//     .pipe(dest(options.paths.dist.base))
// }

function moveManifest() {
  return src(`${options.paths.src.base}/manifest.json`).pipe(dest(options.paths.dist.base));
}
//svg sprite-mono task
function svgSpriteMono() {
  return src(`${options.paths.src.media}/icons/mono/*.svg`)
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "svgSpritesMono",
          message: error.message
        }))
      })
    )
    .pipe(newer(`${options.paths.dist.media}/icons`))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../icons-sprite-mono.svg"
          }
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  { removeNonInheritableGroupAttrs: true },
                  { collapseGroups: true },
                  {
                    removeAttrs: {
                      attrs: "class|data-name|fill|stroke"
                    }
                  }
                ]
              }
            }
          ]
        }
      })
    )
    .pipe(plumber.stop())
    .pipe(dest(`${options.paths.dist.media}/icons/`));
}

function svgSpriteMulti() {
  return src(`${options.paths.src.media}/icons/multi/*.svg`)
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: "svgSpritesMulti",
          message: error.message
        }))
      })
    )
    .pipe(newer(`${options.paths.dist.media}/icons`))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../icons-sprite-multi.svg"
          }
        }
      })
    )
    .pipe(plumber.stop())
    .pipe(dest(`${options.paths.dist.media}/icons/`));
}

function watchFiles() {
  watch(`${options.paths.src.base}/pug/**/*.pug`, series(devHTML, devStyles, previewReload));
  watch([`${options.paths.src.base}/pug/**/*.pug`, `!${options.paths.src.base}/pug/*.pug`], series(compileChunks, devStyles, previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/**/*.scss`], devStyles);
  watch(`${options.paths.src.js}/**/*.js`, series(devScripts, previewReload));
  watch([`!${options.paths.src.media}/icons/**`, `${options.paths.src.media}/**/*`], series(devImages, previewReload));
  watch(`${options.paths.src.media}/icons/mono/*.svg`, series(svgSpriteMono, previewReload));
  watch(`${options.paths.src.media}/icons/multi/*.svg`, series(svgSpriteMulti, previewReload));
  watch(`${options.paths.src.fonts}/**/*`, series(devFonts, previewReload));
  console.log("\n\t" + logSymbols.info, "Watching for Changes..\n");
}

function devClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning dist folder for fresh start.\n");
  return del([options.paths.dist.base]);
}

//Production Tasks (Optimized Build for Live/Production Sites)
function prodHTML() {
  return (
    src(`${options.paths.dist.base}/*.html`)
      .pipe(replace(".png", ".webp"))
      .pipe(replace(".jpg", ".webp"))
      .pipe(replace(".jpeg", ".webp"))
      .pipe(replace("../js", "js"))
      .pipe(replace("../media", "media"))
      // .pipe(size({ title: "Before html minification " }))
      // .pipe(
      //   htmlmin({
      //     collapseWhitespace: true,
      //     removeComments: true,
      //     minifyCSS: true,
      //     minifyJS: true
      //   })
      // )
      // .pipe(size({ title: "After html minification " }))
      .pipe(dest(options.paths.build.base))
  );
}

function prodStyles() {
  return src(`${options.paths.dist.css}/**/*`)
    .pipe(size({ title: "CSS size Before PURGE " }))
    .pipe(
      purgecss({
        content: ["dist/**/*.{html,js}"],
        css: ["dist/css/style.css"],
        defaultExtractor: content => {
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
          const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
          return broadMatches.concat(innerMatches);
        }
      })
    )
    .pipe(size({ title: "CSS size After PURGE  " }))
    .pipe(size({ title: "CSS size Before minification " }))
    .pipe(cleanCSS())
    .pipe(size({ title: "CSS size After minification " }))
    .pipe(dest(options.paths.build.css));
}

function prodScripts() {
  return src(`${options.paths.dist.js}/**/*.js`).pipe(replace(".png", ".webp")).pipe(replace(".jpg", ".webp")).pipe(replace(".jpeg", ".webp")).pipe(replace("../js", "js")).pipe(replace("../media", "media")).pipe(uglify()).pipe(dest(options.paths.build.js));
}

function prodImages() {
  return src([`${options.paths.src.media}/**/*`, `!${options.paths.src.media}/icons/**`, `!${options.paths.src.media}/icons`])
    .pipe(newer(options.paths.build.media))
    .pipe(size({ title: "Before WEBP conversion " }))
    .pipe(webp())
    .pipe(size({ title: "After WEBP conversion " }))
    .pipe(dest(options.paths.build.media));
}
function prodSVGSprite() {
  return src(`${options.paths.dist.media}/icons/**`).pipe(dest(`${options.paths.build.media}/icons/`));
}
function prodFonts() {
  return src(options.paths.src.fonts + "/**/*").pipe(dest(options.paths.build.fonts));
}
function moveManifestProd() {
  return src(`${options.paths.src.base}/manifest.json`).pipe(dest(options.paths.build.base));
}
// function prodFavicon() {
//   return src([
//     `${options.paths.src.base}/media/apple-touch-icon.png`,
//     `${options.paths.src.base}/media/favicon.png`,
//     `${options.paths.src.base}/media/favicon.svg`,
//     `${options.paths.src.base}/media/mask-icon.svg`,
//   ])
//     .pipe(dest(options.paths.build.base))
// }
function moveRobotsTXT() {
  return src(`${options.paths.src.base}/robots.txt`).pipe(dest(options.paths.build.base));
}

function prodClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning build folder for fresh start.\n");
  return del([options.paths.build.base]);
}

function buildFinish(done) {
  console.log("\n\t" + logSymbols.info, `Production build is complete. Files are located at ${options.paths.build.base}\n`);
  done();
}

// Generate & Inline Critical-path CSS
function criticalCSS() {
  return src("build/index.html")
    .pipe(
      critical({
        base: "build/",
        inline: true,
        css: ["build/css/style.css"],
        extract: true
      })
    )
    .on("error", err => {
      log.error(err.message);
    })
    .pipe(dest("build/"));
}

exports.default = series(
  devClean, // Clean Dist Folder
  parallel(devStyles, devScripts, devImages, svgSpriteMono, svgSpriteMulti, devFonts, moveManifest, devHTML), //Run All tasks in parallel
  livePreview, // Live Preview Build
  watchFiles // Watch for Live Changes
);

exports.prod = series(
  prodClean, // Clean Build Folder
  parallel(
    prodStyles,
    prodScripts,
    prodImages,
    prodSVGSprite,
    prodFonts,
    prodHTML,
    moveManifestProd,
    moveRobotsTXT
    // prodFavicon
  ), //Run All tasks in parallel
  // criticalCSS,
  buildFinish
);

exports.devImages = devImages;
exports.devClean = devClean;
exports.prodSVGSprite = prodSVGSprite;
exports.moveRobotsTXT = moveRobotsTXT;
exports.moveManifestProd = moveManifestProd;
// exports.prodFavicon = prodFavicon;
