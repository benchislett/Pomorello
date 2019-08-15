git config user.name "Benjamin Chislett"
git config user.email "chislett.ben@gmail.com"

export GIT_DEPLOY_DIR=public/
export GIT_DEPLOY_BRANCH=gh-pages
export GIT_DEPLOY_REPO=git@github.com:benchislett/Pomorello.git

curl https://raw.githubusercontent.com/X1011/git-directory-deploy/master/deploy.sh > deploy_tmp.sh

bash deploy_tmp.sh -e -m "[ci skip] Update build files"
