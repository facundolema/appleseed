#!/bin/bash

# Define an array of names
names=()

# Loop through the names and create a directory with an index.md file for each name
for name in "${names[@]}"
do
  # Create the directory
  mkdir "docs/countries/ /$name"

  # Create the index.md file
  touch "docs/countries/ /$name/index.md"
done