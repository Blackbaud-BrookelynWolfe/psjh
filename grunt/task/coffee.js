/* jshint strict:false */

module.exports = {
  options: {
    join: true
  }, 
  
  "global": {
    files: {
      'dist/global/js/main.js': [
        'src/global/coffee/init.coffee', 
        'src/global/coffee/config/*.*', 
        'src/global/coffee/service/*.*', 
        'src/global/coffee/**/*.*'
      ]
    }
  },

  "participant-center" : {
    files: {
      'dist/participant-center/js/main.js': [
        'src/participant-center/coffee/init.coffee', 
        'src/participant-center/coffee/config/*.*', 
        'src/participant-center/coffee/service/*.*', 
        'src/participant-center/coffee/**/*.*'
      ]
    }
  }
}