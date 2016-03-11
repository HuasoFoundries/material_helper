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
    "hammerjs": "npm:hammerjs@2.0.6",
    "jquery": "github:instagis/jquery_helper@0.5.5",
    "underscore": "npm:lodash@3.10.1",
    "velocity": "github:julianshapiro/velocity@1.2.3",
    "github:instagis/jquery_helper@0.5.5": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "npm:jquery@2.2.1",
      "jquery-csv": "github:evanplaice/jquery-csv@0.8.1",
      "jquery-serializejson": "npm:jquery-serializejson@2.6.2",
      "jquery.cookie": "github:carhartl/jquery-cookie@1.4.1",
      "jquery.waitforChild": "npm:jquery.waitforChild@1.0.1",
      "lodash": "github:lodash/lodash@3.10.1"
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
