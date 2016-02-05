module.exports = function (grunt) {
	grunt.registerTask('linkAssets', [
		'sails-linker:devScripts',
		'sails-linker:devDependencies',
		'sails-linker:devStyles',
		'sails-linker:devTemplates',
		'sails-linker:devScriptsJade',
		'sails-linker:devStylesJade',
		'sails-linker:devTemplatesJade'
	]);
};
