#!/usr/bin/env bash

echo "~ Installing Laravel ~"
composer create-project laravel/laravel laravel --prefer-dist --no-progress
mv laravel/* .

echo "~ Installing Lord/Laroute ~"
composer require --dev lord/laroute dev-master --no-progress
php artisan config:publish lord/laroute

echo "~ Installing Way/Generators ~"
composer require --dev way/generators dev-master --no-progress
php artisan config:publish way/generators

echo "~ Installing boilerplate files ~"
cp -R -v boilerplate/* .
cp boilerplate/.bowerrc .bowerrc

echo "~ Modding Laravel ~"
sed -i "" "s/array('homestead')/array('precise64', 'zion.local')/g" bootstrap/start.php
sed -i "" "s/showWelcome/index/g" app/controllers/HomeController.php
sed -i "" "s/hello/home/g" app/controllers/HomeController.php
sed -i "" "s/public\/js/public\/vendor\/laroute/g" app/config/packages/lord/laroute/config.php

echo "~ Cleaning up ~"
rm -rf boilerplate
rm app/views/hello.php

chmod -R 777 app/storage # yolo

# Laroute
php artisan generate:laroute

echo "~ Installing Node Modules ~"
npm install --save-dev bower grunt load-grunt-config time-grunt grunt-contrib-watch grunt-modernizr grunt-contrib-sass grunt-contrib-requirejs grunt-bower-requirejs grunt-contrib-uglify grunt-spritesmith 

echo "~ Installing Bower Components ~"
bower install --save-dev modernizr requirejs requirejs-text marionette almond inuit-box-sizing inuit-defaults inuit-functions inuit-mixins inuit-normalize inuit-clearfix inuit-page inuit-headings inuit-paragraphs inuit-layout inuit-widths

echo "~ Pulling Vagrantfile ~"
curl -O https://raw.githubusercontent.com/aaronlord/vagrant/master/Vagrantfile

echo "~ Ready. vagrant up -> grunt -> make something sexy. ~"
