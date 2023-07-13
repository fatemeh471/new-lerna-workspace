# Create an empty directory
mkdir ./new-lerna-workspace
# Change into the new directory
cd ./new-lerna-workspace
# Initialize lerna (using --dryRun to preview the changes)
npx lerna init 
# Create new repo directory
npx lerna create package-1
# Create new repo directory
npx lerna create package-2
#  Add dependencies 
"dependencies": {
    "package-2":"file:../package-2"
  }
