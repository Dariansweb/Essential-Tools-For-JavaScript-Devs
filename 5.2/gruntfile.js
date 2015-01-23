module.exports = function(grunt) {
  
    grunt.initConfig({
        uglify: {
            dist : {
                expand: true,
                cwd: "js-src",
                src: "*.js",
                dest: "js/",
                ext: ".min.js"
            }
        },
        browserify: {
         dist: {
             files: {
               "js-src/app.js":["main.js"]   
             }
         }
        }
    });
    
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask("default", ["browserify", "uglify"]);
    
    
    //grunt.registerTask("default", "Log stuff", function() {
    //   grunt.log.write("Write something"); 
    //});
    
    
};