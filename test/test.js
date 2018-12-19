describe('index.js: ', function() {
    it('contains a passing spec', function() {
        console.log("Hello Karma");
    });
    it('html spec', function() {
        document.body.innerHTML = window.__html__['source-x_desktop-index'];
        console.log(document.body);
    });
});