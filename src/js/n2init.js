(function () {
    var N = this;
    N.N2_ = N.N2_ || {r: [], d: []}, N.N2R = N.N2R || function () {
        N.N2_.r.push(arguments)
    }, N.N2D = N.N2D || function () {
        N.N2_.d.push(arguments)
    }
}).call(window);
window.nextend = {
    jQueryFallback: './src/js/jq/jquery.js',
    localization: {},
    ready: function (cb) {
        console.error('nextend.ready will be deprecated!');
        N2R('documentReady', function ($) {
            cb.call(window, $)
        })
    }
};