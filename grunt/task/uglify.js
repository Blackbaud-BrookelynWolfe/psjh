/* jshint strict:false */

module.exports = {
  "global": {
    files: [
      {
        src: [
          'dist/global/js/main.js'
        ], 
        dest: 'dist/global/js/main.min.js'
      }
    ]
  },

  "participant-center": {
    files: [
      {
        src: [
          'dist/participant-center/js/main.js'
        ], 
        dest: 'dist/participant-center/js/main.min.js'
      }
    ]
  }
}