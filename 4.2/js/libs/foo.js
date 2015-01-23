(function () {
    foo = {
        bar: function () {
            //alert("alert something");
            $(document.body).append("<div>this is inside of foo.js</div>");
        }
    };
}());