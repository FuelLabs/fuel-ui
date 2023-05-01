#!/bin/bash

# Check if the PR number argument is provided
if [ -z "$2" ]; then
	echo "Error: PR number argument is required."
	echo "Usage: $0 <PR_NUMBER>"
	exit 1
fi

# Define the package name and pattern
all_packages=("@fuel-ui/react" "@fuel-ui/css" "@fuel-ui/design-tokens" "@fuel-ui/config" "@fuel-ui/test-utils")

pr_version="$2"
pattern="-pr-$pr_version-[a-f0-9]*"

# Loop over all packages
for package_name in "${all_packages[@]}"; do
	# Retrieve all versions of the package using npm view
	all_versions=$(npm view "$package_name" versions --json)

	# Use jq to parse the JSON array and filter versions based on the pattern
	filtered_versions=$(echo "$all_versions" | jq -r ".[] | select(test(\"$pattern\"))")

	# Check if filtered_versions contains any matching versions
	if [ -n "$filtered_versions" ]; then
		echo "Versions matching the pattern for package $package_name:"
		# Iterate over the filtered versions
		for version in $filtered_versions; do
			full_package_name="$package_name@$version"
			echo "Unpublishing $full_package_name"
			# Check if the package is published
			if npm view "$full_package_name" version >/dev/null 2>&1; then
				npm unpublish "$full_package_name" --force
			fi
		done
	else
		echo "No versions match the specified pattern for package $package_name."
	fi
done
