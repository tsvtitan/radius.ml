module.exports = function (grunt) {
	grunt.registerTask('linkAssetsProd', [
		'sails-linker:prodScripts',
    'sails-linker:prodDependencies',
		'sails-linker:prodStyles',
		'sails-linker:devTemplates',
		'sails-linker:prodScriptsJade',
		'sails-linker:prodStylesJade',
		'sails-linker:devTemplatesJade'
	]);
};
