module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
    'clean:ionic',
    'copy:ionicProd',
		'linkAssetsProd',
    'watch:prod'
	]);
};
