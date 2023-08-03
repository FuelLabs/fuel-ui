#!/bin/bash

# Check if arguments are provided
if [ $# -eq 0 ]; then
	echo "No arguments provided"
	exit 1
fi

args=("${@:2}")

# Run pnpm turbo with the same arguments and cache directory
echo "${args[@]}"
pnpm turbo run "$1" --cache-dir=".turbo" "${args[@]}"
