#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

cd client
yarn lint-staged
