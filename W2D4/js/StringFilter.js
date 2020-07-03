String.prototype.filter = function(word){
    return this.replace(" " + word, "");
}

console.log("This house is not nice!".filter('not'));