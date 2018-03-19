/* jshint strict:false */

module.exports = {
  options: {
    collapseBooleanAttributes: true, 
    collapseWhitespace: true, 
    minifyCSS: true, 
    minifyJS: true, 
    removeComments: true, 
    removeEmptyAttributes: true, 
    removeScriptTypeAttributes: true, 
    removeStyleLinkTypeAttributes: true
  }, 
  
  "global": {
    files: [
      {
        expand: true, 
        cwd: 'src/global/html/', 
        src: [
          '**/*.*'
        ], 
        dest: "dist/global/html/"
      }
    ]
  },

  "participant-center": {
    files: [
      {
        expand: true,
        cwd: 'src/participant-center/html/',
        src: [
          '**/*.*'
        ],
        dest: 'dist/participant-center/html/'
      }
    ]
  }
}