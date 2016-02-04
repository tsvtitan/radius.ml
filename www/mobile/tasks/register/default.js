module.exports = function (grunt) {
	grunt.registerTask('default', ['compileAssets','clean:ionic','copy:ionicDev','linkAssets','watch:dev']);
};
