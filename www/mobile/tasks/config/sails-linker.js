/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

	grunt.config.set('sails-linker', {
    
		devScripts: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').scriptsToInject,
				'views/**/*.html': require('../pipeline').scriptsToInject,
				'views/**/*.ejs': require('../pipeline').scriptsToInject
			}
		},

		devScriptsRelative: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').scriptsToInject,
				'views/**/*.html': require('../pipeline').scriptsToInject,
				'views/**/*.ejs': require('../pipeline').scriptsToInject
			}
		},

		devDependencies: {
			options: {
				startTag: '<!--DEPENDENCIES-->',
				endTag: '<!--DEPENDENCIES END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').dependenciesToInject,
				'views/**/*.html': require('../pipeline').dependenciesToInject,
				'views/**/*.ejs': require('../pipeline').dependenciesToInject
			}
		},

		devDependenciesRelative: {
			options: {
				startTag: '<!--DEPENDENCIES-->',
				endTag: '<!--DEPENDENCIES END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').dependenciesToInject,
				'views/**/*.html': require('../pipeline').dependenciesToInject,
				'views/**/*.ejs': require('../pipeline').dependenciesToInject
			}
		},

    prodScripts: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.ejs': ['.tmp/public/mobile/min/production.min.js']
			}
		},

		prodScriptsRelative: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.ejs': ['.tmp/public/mobile/min/production.min.js']
			}
		},

    prodDependencies: {
			options: {
				startTag: '<!--DEPENDENCIES-->',
				endTag: '<!--DEPENDENCIES END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.ejs': ['.tmp/public/mobile/min/production.min.js']
			}
		},

		prodDependenciesRelative: {
			options: {
				startTag: '<!--DEPENDENCIES-->',
				endTag: '<!--DEPENDENCIES END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.html': ['.tmp/public/mobile/min/production.min.js'],
				'views/**/*.ejs': ['.tmp/public/mobile/min/production.min.js']
			}
		},

    devStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public/mobile/'
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').stylesToInject,
				'views/**/*.html': require('../pipeline').stylesToInject,
				'views/**/*.ejs': require('../pipeline').stylesToInject
			}
		},

		devStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').stylesToInject,
				'views/**/*.html': require('../pipeline').stylesToInject,
				'views/**/*.ejs': require('../pipeline').stylesToInject
			}
		},

		prodStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/mobile/min/production.min.css'],
				'views/**/*.html': ['.tmp/public/mobile/min/production.min.css'],
				'views/**/*.ejs': ['.tmp/public/mobile/min/production.min.css']
			}
		},

		prodStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/mobile/min/production.min.css'],
				'views/**/*.html': ['.tmp/public/mobile/min/production.min.css'],
				'views/**/*.ejs': ['.tmp/public/mobile/min/production.min.css']
			}
		},

		// Bring in JST template object
		devTemplates: {
			options: {
				startTag: '<!--TEMPLATES-->',
				endTag: '<!--TEMPLATES END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/mobile/templates/jst.js'],
				'views/**/*.html': ['.tmp/public/mobile/templates/jst.js'],
				'views/**/*.ejs': ['.tmp/public/mobile/templates/jst.js']
			}
		},

		devScriptsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'views/**/*.jade': require('../pipeline').scriptsToInject
			}
		},

		devScriptsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'views/**/*.jade': require('../pipeline').scriptsToInject
			}
		},

		prodScriptsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/mobile/min/production.min.js']
			}
		},

		prodScriptsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/mobile/min/production.min.js']
			}
		},

		devStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public/mobile/'
			},

			files: {
				'views/**/*.jade': require('../pipeline').scriptsToInject
			}
		},

		devStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},

			files: {
				'views/**/*.jade': require('../pipeline').scriptsToInject
			}
		},

		prodStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/mobile/min/production.min.css']
			}
		},

		prodStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public/mobile/',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/mobile/min/production.min.css']
			}
		},

		// Bring in JST template object
		devTemplatesJade: {
			options: {
				startTag: '// TEMPLATES',
				endTag: '// TEMPLATES END',
				fileTmpl: 'script(type="text/javascript", src="%s")',
				appRoot: '.tmp/public/mobile/'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/mobile/jst.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
