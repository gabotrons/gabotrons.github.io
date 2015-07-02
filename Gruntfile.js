module.exports = function (grunt) {

	grunt.initConfig({
		globalConfig : {
			src: 'assets/',
			destCss: 'assets/css/'
		},		
		stylus: {
			compile: {
				files: {
				  'assets/css/estilos.css': 'assets/css/estilos.styl', // 1:1 compile
			  	}
			}
		},
		uncss: {
			dist: {
				files: [
					{ src: 'index.html', dest: 'cleancss/tidy.css' }
				]
			}
		},
		cssmin: {
			dist: {
				files: [
					{ src: ['assets/bootstrap-css/css/bootstrap.min.css','assets/custom/style.css','assets/fontawesome/css/font-awesome.min.css'], dest: 'assets/css/min/compiled.min.css' }
				]
			}
		},  
		uglify: {
			options: {
				mangle: false,
				preserveComments: false
			},            
			dist: {
				files: {
					'assets/js/min/compiled.min.js': ['assets/angular/angular.min.js','assets/custom/appCV.js','assets/custom/controllers/MainController.js','assets/custom/directives/generalInfo.js', 'assets/custom/services/backgroundInfo.js'] // make sure we load jQuery first
				}
			}
		},
		processhtml: {
			dist: {
				files: {
						'index.html': ['index.html']
					}
			}
		},
		copy: {
			fonts: {
				cwd: '<%= globalConfig.src  %>',
				src: ['fontawesome/fonts/*','bootstrap-css/fonts/*'],
				dest: '<%= globalConfig.destCss  %>fonts/',
				expand: true,
				flatten: true,
				filter: 'isFile'
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default tasks.
	grunt.registerTask('default', ['uglify','cssmin']);

};