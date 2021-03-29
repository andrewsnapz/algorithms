// log the word "bar" by using the "moo" function
var f = (function() {
    return {
        foo: "bar",
        moo: function(callback) {
            callback.call(this);
        },
    };
})();


f.moo(function() {
    console.log(this.foo)
});