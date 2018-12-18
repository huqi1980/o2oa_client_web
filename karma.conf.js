module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'source/**/*.js': ['coverage']
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            reporters: [
                {type:'lcovonly', subdir: '.'},
                {type:'json', subdir: '.'},
                {type:'html',dir : 'coverage/'}
            ]
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: true,
        concurrency: Infinity
    })
}