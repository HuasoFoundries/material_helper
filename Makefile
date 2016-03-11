VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

version:
	@echo $(VERSION)

default: build
.PHONY: build




build:
	jspm update
	jspm bundle-sfx src/material_helper.js dist/material_helper_sfx.js
	jspm bundle src/material_helper.js dist/material_helper.js

