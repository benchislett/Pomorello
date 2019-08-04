## GET GIT INFO

# Get the previous branch name so we can switch back correctly
OLD_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Get the remote url from git config for pushing later
REMOTE_URL=$(git config --get remote.origin.url)

# Set the folder that contains the build files
DEPLOY_FOLDER=public/

# Set the branch where the build files are will go (must already exist)
DEPLOY_BRANCH=gh-pages


## SEND CHANGES TO REMOTE

# Change the head to the deployment branch
git symbolic-ref HEAD refs/heads/$DEPLOY_BRANCH

# Reset the changes
git --work-tree $DEPLOY_FOLDER reset --mixed --quiet

# Stage all files in the build folder
git --work-tree $DEPLOY_FOLDER add --all

# Commit the changes, prompt the user for a commit message
git --work-tree $DEPLOY_FOLDER commit -m "Add build files"

# Push the changes to the remote
git push --quiet $REMOTE_URL $DEPLOY_BRANCH


## RESET STATE

# Put the head back to where it was initially
git symbolic-ref HEAD refs/heads/$OLD_BRANCH

# Clean up the git state a bit
git reset --mixed

