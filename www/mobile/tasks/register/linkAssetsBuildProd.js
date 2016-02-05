module.exports = function (grunt) {
	grunt.registerTask('linkAssetsBuildProd', [
		'sails-linker:prodScriptsRelative',
    'sails-linker:prodDependenciesRelative',
		'sails-linker:prodStylesRelative',
		'sails-linker:devTemplates',
		'sails-linker:prodScriptsRelativeJade',
		'sails-linker:prodStylesRelativeJade',
		'sails-linker:devTemplatesJade'
	]);
};
