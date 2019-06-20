sass:
	gulp sass
watch:
	gulp watch
minimize: sass
	gulp cssmin
	gulp jsmin
	gulp imagemin
assembly: minimize
	gulp assemblyCSS
	gulp assemblyJS
build: assembly
	#TODO:здесь надо разобраться, т.к. неопнятно куда копирвоать в yii2. Также возможнет вариант подгрузки внешних либ средвствами фреймворка
	#cp -vf 'prod_assembly/images/*' '../html/wp-content/themes/polygon/assets/img/'
	#cp -vf 'prod_assembly/css/main.assm.min.css' '../public/?????/css/main.assm.min.css'
	#cp -vf 'prod_assembly/js/main.assm.min.js' '../public/??????/js/main.assm.min.js'
	#cp -vf 'libs/js/jquery-3.3.1.min.js' '../public/???????/js/jquery-3.3.1.min.js'