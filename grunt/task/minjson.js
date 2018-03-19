/* jshint strict:false */

module.exports = {
  "src": {
    files: [
      {
        expand: true, 
        cwd: 'src/participant-center/translation/', 
        src: [
          '*.json'
        ], 
        dest: 'dist/participant-center/translation/'
      }
    ]
  }
}