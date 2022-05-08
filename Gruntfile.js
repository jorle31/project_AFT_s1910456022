module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            build: 'build',
            css: 'build/assets/css/*.css',
            scripts: 'build/assets/js/*.js'
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.',
                    hostname: '0.0.0.0',
                    protocol: 'http',
                    livereload: true,
                    open: 'http://localhost:9000/build',
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: 'src/assets/**/*.scss',
                tasks: ['sass', 'cssmin']
            },
            scripts: {
                files: ['src/assets/**/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['htmlmin']
            },
            image: {
                files: ['src/assets/**/*.{png,jpg,jpeg}'],
                tasks: ['imagemin']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/assets/css/main.css': 'src/assets/scss/main.scss',
                }
            }
        },
        concat: {
            dist: {
                src: ['src/assets/js/modal.js', 'src/assets/js/animations.js', 'src/assets/js/cookies.js', 'src/assets/js/navigation.js'],
                dest: 'build/assets/js/main.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'build/assets/js/main.min.js': ['build/assets/js/main.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/assets/css/main.min.css': ['build/assets/css/main.css']
                }
            }
        },
        jshint: {
            options: {
                'esversion': 6
            },
            all: ['Gruntfile.js', 'src/assets/**/*.js']
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'src/index.html'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/images/',
                    src: ['**/*.{png,jpg,jpeg}'],
                    dest: 'build/assets/images/',
                    optimizationLevel: 7
                }]
            }
        }
    });

    //Cleans the build folder before re-building files to prevent unwanted artefacts
    grunt.loadNpmTasks('grunt-contrib-clean');
    //Initializes a local server (necessary for live reload to work without manually reloading or reopen page)
    grunt.loadNpmTasks('grunt-contrib-connect');
    //Initializes the watch task to watch for changes in
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Compiles Sass to css
    grunt.loadNpmTasks('grunt-contrib-sass');
    //Frisks .js files for unoptimized chunks of code
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //Concat all .css and .js files to one respective file
    grunt.loadNpmTasks('grunt-contrib-concat');
    //Minimizes .js files
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Minimizes .css files
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //Minimizes .html files
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //Minimizes images
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //Register tasks to the default task
    grunt.registerTask('default', ['clean:build', 'jshint', 'sass', 'concat', 'uglify', 'cssmin', 'htmlmin', 'imagemin']);
    //Register tasks to the server task
    grunt.registerTask('server', ['connect', 'watch']);
    //Register tasks to the css task
    grunt.registerTask('css', ['clean:css', 'sass', 'cssmin']);
    //Register tasks to the js task
    grunt.registerTask('js', ['clean:scripts', 'jshint', 'concat', 'uglify']);
    //Register tasks to the minify task
    grunt.registerTask('minify', ['concat', 'uglify', 'cssmin', 'htmlmin', 'imagemin']);
};