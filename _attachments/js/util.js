// Why isn't this built in?!?
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};
