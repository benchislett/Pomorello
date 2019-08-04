npm run build
git --work-tree public/ checkout --orphan gh-pages
git --work-tree public/ add -A
git --work-tree public/ commit
git push gh-pages

