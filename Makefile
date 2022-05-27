.PHONY: build-KiloMoviesApiFunction

build-KiloMoviesApiFunction:
	rm -rf dist
	npm install
	cp -r ./node_modules "$(ARTIFACTS_DIR)/"
	npm run build
	cp -r ./dist/* "$(ARTIFACTS_DIR)/"
