/* jshint strict:false */

module.exports = {
  "global": {
    files: [
      {
        expand: true,
        cwd: 'dist/global/html/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/global/css/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/global/js/',
        src: [
          '**/*'
        ]
      }
    ]
  },

  "swedish": {
    files: [
      {
        expand: true,
        cwd: 'dist/swedish/html/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/swedish/css/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/swedish/js/',
        src: [
          '**/*'
        ]
      }
    ]
  },

  "rivkin": {
    files: [
      {
        expand: true,
        cwd: 'dist/rivkin/html/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/rivkin/css/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/rivkin/js/',
        src: [
          '**/*'
        ]
      }
    ]
  },

  "participant-center": {
    files: [
      {
        expand: true,
        cwd: 'dist/participant-center/html/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/participant-center/css/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/participant-center/js/',
        src: [
          '**/*'
        ]
      },
      {
        expand: true,
        cwd: 'dist/participant-center/translation/',
        src: [
          '**/*'
        ]
      }
    ]
  }

}