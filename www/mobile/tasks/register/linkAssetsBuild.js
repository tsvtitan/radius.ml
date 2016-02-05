module.exports = function (grunt) {
	grunt.registerTask('linkAssetsBuild', [
		'sails-linker:devScriptsRelative',
    'sails-linker:devDependenciesRelative',
		'sails-linker:devStylesRelative',
		'sails-linker:devTemplates',
		'sails-linker:devScriptsRelativeJade',
		'sails-linker:devStylesRelativeJade',
		'sails-linker:devTemplatesJade'
	]);
};
