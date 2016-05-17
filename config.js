System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  meta: {
    "jquery": {
      "build": false
    },
    "src/material_components/*": {
      "deps": [
        "jquery"
      ]
    }
  },

  map: {
    "hammerjs": "github:hammerjs/hammer.js@2.0.8",
    "jquery": "npm:jquery@2.2.3",
    "underscore": "npm:lodash@3.10.1",
    "velocity": "github:julianshapiro/velocity@1.2.3"
  }
});
