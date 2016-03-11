VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')
JQUERYVERSION=$(shell cat config.js | sed -n 's/.*"jquery": "\([^"]*\)",/\1/p' | head -1).js

SHELL = /usr/bin/env bash

version:
	@echo $(VERSION)

jqversion:
	@echo $(JQUERYVERSION)

default: build
.PHONY: build




build:
	jspm update
	jspm bundle-sfx src/material_helper.js - jquery dist/material_helper.js --format amd
	sed -i s/"$(JQUERYVERSION)"/"jquery"/g dist/material_helper.js

