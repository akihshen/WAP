describe("Takes an array of numbers and returns their sum", function(){
    it("The sum of the numbers is", function(){
        assert.equal(sum([1, 2, 3, 4, 5, 6]), 21);
    });
    
    it("The sum of the numbers is", function(){
        assert.equal(sum([1, 2, 3, 4, 5, 6]), 25);
    });
});

describe("Takes an array of numbers and returns their product", function(){
    it("The product of the numbers is", function(){
        assert.equal(multiply([1, 2, 3, 4, 5, 6]), 720);
    });

    it("The product of the numbers is", function(){
        assert.equal(multiply([1, 2, 3, 4, 5]), 360);
    }); 
});

describe("Takes a string and returns its reverse", function(){    
    it("The reverse of the string is", function(){
        assert.equal(reverse("Computer"), "retupmoC");
    });  

    it("The reverse of the string is", function(){
        assert.equal(reverse("WOW"), "MOM");
    });  
});

describe("Takes an array of strings and returns words longer than  a given length", function(){    
    it("Words longer than 5 letters are", function(){
        assert.equal(filterLongWords(["Particle", "Mark", "California", "Field"], 5), ["Particle", "California"]);
    });  
    
    it("Words longer than 0 letters are", function(){
        assert.equal(filterLongWords(["1", "11", "111"], 0), ["111"]);
    });    
});