#!/bin/bash
currentDir=$(pwd)
npm run build
cd www
mv index.html index.php
cp ../.htaccess .
rm -rf /tmp/covapp-deploy
cp -R www /tmp/covapp-deploy
cd /tmp/covapp-deploy
git init
git add .
git commit -m 'Deploy'
git remote add heroku https://git.heroku.com/vobicov.git
git push heroku master -f
cd $currentDir
