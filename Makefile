
SHELL = /usr/bin/env bash

default: build
.PHONY: build




build:
	jspm update
	jspm bundle-sfx src/material_helper.js dist/material_helper_sfx.js
	jspm bundle src/material_helper.js dist/material_helper.js

