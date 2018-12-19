module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'source/x_desktop/index.html',
            'source/x_desktop/res/*.js',
            'source/x_desktop/res/js/x.js',
            'test/**/*.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'source/**/*.js': ['coverage'],
            'source/x_desktop/index.html': ['html2js']
        },

        reporters: ['progress', 'coverage'],

        html2JsPreprocessor: {
            // stripPrefix: 'public/',
            // prependPrefix: 'served/',
            processPath: function(filePath) {
                var p = filePath.replace(/\.html$/, '');
                p = p.replace(/\\/g, '-');
                return p.replace(/\//g, '-');
            }
        },

        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {type:'lcovonly', subdir: 'lcovonly'},
                {type:'json', subdir: 'json'},
                {type:'html',subdir : 'html'}
            ]
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,

        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],

        singleRun: true,
        concurrency: Infinity
    })
};