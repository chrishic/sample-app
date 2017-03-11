
all: install

install: install-this install-server

install-this:
	@/bin/bash -c "npm install"

install-server:
	@/bin/bash -c "pushd server > /dev/null;npm install;popd > /dev/null"
