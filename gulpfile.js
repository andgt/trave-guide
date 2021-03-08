const gulp = require("gulp");
const ghPages = require('gh-pages');
const path = require('path');

//gh-pages

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './source'), cb);
}

exports.deploy = deploy;