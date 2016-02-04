System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "dist/material_helper.js": [
      "src/material_components/waves.js",
      "src/material_components/tabs.js",
      "src/material_components/slider.js",
      "src/material_components/sideNav.js",
      "src/material_components/scrollspy.js",
      "src/material_components/pushpin.js",
      "src/material_components/parallax.js",
      "src/material_components/materialbox.js",
      "src/material_components/leanModal.js",
      "src/material_components/jquery.hammer.js",
      "npm:hammerjs@2.0.6",
      "npm:hammerjs@2.0.6/hammer",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "src/material_components/jquery.easing.1.3.js",
      "src/material_components/dropdown.js",
      "src/material_components/chips.js",
      "src/material_components/character_counter.js",
      "src/material_components/cards.js",
      "src/material_components/buttons.js",
      "src/material_components/animation.js",
      "src/material_helper.js",
      "github:julianshapiro/velocity@1.2.3",
      "github:julianshapiro/velocity@1.2.3/velocity"
    ]
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
    "hammerjs": "npm:hammerjs@2.0.6",
    "jquery": "github:instagis/jquery_helper@0.2.1",
    "underscore": "npm:lodash@3.10.1",
    "velocity": "github:julianshapiro/velocity@1.2.3",
    "github:components/jqueryui@1.11.4": {
      "jquery": "npm:jquery@2.2.0"
    },
    "github:instagis/jquery_helper@0.2.1": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "npm:jquery@2.2.0",
      "jquery-csv": "github:evanplaice/jquery-csv@0.8.1",
      "jquery-serializejson": "npm:jquery-serializejson@2.6.2",
      "jquery-ui": "github:components/jqueryui@1.11.4",
      "jquery.cookie": "github:carhartl/jquery-cookie@1.4.1",
      "jquery.waitforChild": "npm:jquery.waitforChild@0.1.1",
      "lodash": "npm:lodash@3.10.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:hammerjs@2.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-serializejson@2.6.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
