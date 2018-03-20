/* jshint strict:false */

module.exports = {
  "grunt-config": {
    files: [
      'Gruntfile.js',
      'grunt/task/*.js',
      'grunt/.jshintrc'
    ],
    tasks: [
      'jshint:grunt-config',
      'notify:grunt-config'
    ]
  },

  "global": {
    files: [
      'src/global/html/**/*',
      'src/global/sass/**/*',
      'src/global/coffee/**/*'
    ],
    tasks: [
      'clean:global',
      'html-dist:global',
      'css-dist:global',
      'js-dist:global',
      'notify:global',
      'clean:swedish',
      'css-dist:swedish',
      'notify:swedish'
    ]
  },

  "swedish": {
    files: [
      'src/swedish/sass/*',
    ],
    tasks: [
      'clean:swedish',
      'css-dist:swedish',
      'notify:swedish'
    ]
  },

  "participant-center": {
    files: [
      'src/participant-center/html/**/*',
      'src/participant-center/sass/**/*',
      'src/participant-center/coffee/**/*',
      'src/participant-center/translation/**/*'
    ],
    tasks: [
      'clean:participant-center',
      'html-dist:participant-center',
      'css-dist:participant-center',
      'js-dist:participant-center',
      'jshint:src-json:participant-center',
      'json-dist:participant-center',
      'notify:participant-center'
    ]
  }
}