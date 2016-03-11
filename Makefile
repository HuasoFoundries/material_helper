VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

version:
	@echo $(VERSION)

default: build
.PHONY: build




build:
	jspm update
	jspm bundle-sfx src/material_helper.js - jquery dist/material_helper.js --format amd

