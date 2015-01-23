require.config({
    paths: {
        jquery: "libs/jquery.min",
        foo: "libs/foo"
    },
    shim: {
        foo: {
            deps: ["jquery"],
            exports: "foo"
        }
    }
});

require(["app", "foo"], function (app, foo) {
    app.init();
    foo.bar();
});