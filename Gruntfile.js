module.exports = function(grunt) {

grunt.initConfig({
	express: {
	    all: {
	        options: {
	            bases: ['.'],
	            port: 8080,
	            hostname: "localhost",
	            livereload: true
	        }
	    }
	},
	watch: {
	  sass: {
	    files: '**/*.scss',
	    tasks: ['css'],
	    options: {
	      livereload: true // 35729 is the default port === true
	    }
	  },
	  coffee: {
	    files: 'scripts/*.coffee',
	    tasks: ['coffee']
	  },
	  concat: {
	    files: ['scripts/hello.js','scripts/main.js'],
	    tasks: ['concat']
	  },
	  uglify: {
	    files: 'scripts/built.js',
	    tasks: ['uglify'],
	    options: {
	      livereload: true
	    }
	  },
	  all: {
	    files: ['**/*.html'],
	    options: {
	      livereload: true
	    }
	  }
	},
	open: {
	    all: { path: 'http://localhost:8080/index.html' }
	},

  sass: {
	  dev: {
	    files: {
	      'styles/main.css': 'styles/main.scss'
	    }
	  }
	},
	coffee: {
	  compile: {
	   files: {
	    'scripts/hello.js': 'scripts/hello.coffee'
	   }
	 }
	},
	cssmin: {
		build: {
		  src: 'styles/main.css',
		  dest: 'styles/main.min.css'
		}
	},
	concat: {
	  options: {
	    separator: '\n/*next file*/\n\n'  //this will be put between conc. files
	  },
	  dist: {
	    src: ['scripts/hello.js', 'scripts/main.js'],
	    dest: 'scripts/built.js'
	  }
	},
	uglify: {
	  build: {
	    files: {
	      'scripts/built.min.js': ['scripts/built.js']
	    }
	  }
	}
});
grunt.registerTask('default', ['sass']);
grunt.registerTask('css', ['sass', 'cssmin']);
grunt.registerTask('js', ['coffee', 'concat', 'uglify']);
grunt.registerTask('server', ['express', 'open', 'watch' ]);
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');





};