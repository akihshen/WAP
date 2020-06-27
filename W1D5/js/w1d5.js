/* runs test to see if expected argument is === to value returned by function2test argument */
function functionTester(expected, found) {

    // Checks if the arguments are array, if so it will compare element by element
    if(Array.isArray(expected) && Array.isArray(found)){
        if(expected.length !== found.length){
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }else{
            for(let i=0; i<expected.length; i++){
                if(expected[i] !== found[i]){
                    return "TEST FAILED.  Expected " + expected + " found " + found;
                }
            }

            return "TEST SUCCEEDED";
        }
    }else {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }    
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
if (a > b) {
    return a;
} else {
    return b;
};
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
return max(max(a, b), c);  
}

function isVowel(char){
    if(!char || char.length > 1){
        return false;
    } else{
        // Convert to lower case letter
        char = char.toLowerCase();

        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            return true;
        } else{
            return false;
        }
    }
}

function sum(numbers){
    let total = 0.0;

    for(let i=0; i<numbers.length; i++){
        total += numbers[i];
    }

    return total;
}

function multiply(numbers){
    let product = 1.0;

    for(let i=0; i<numbers.length; i++){
    product *= numbers[i];
    }

    return product;
}

function reverse(string){
    if(!string){
        return string;
    }

    let reversed = "";

    for(let i=string.length - 1; i>=0; i--){
        reversed += string.charAt(i);
    }

    return reversed;
}

function  findLongestWord(words){
    if(!words || words.length == 0){
        return "Empty Array";
    }

    let maxLength = -1;

    for(let i=0; i<words.length; i++){

        let len = words[i].length;

        if(len > maxLength){
            maxLength = len;
        }
    }

    return maxLength;
}

function filterLongWords(words, num){
    let longWords = [];
    let word;

    for(let i=0; i<words.length; i++){
        word = words[i];
        if(word.length > num){
            longWords.push(word);
        }
    }

    return longWords;
}

function jsFiddleModified(){
    const a = [1,3,5,3,3]; 

    const b = a.map(function(elem, i, array) {return elem * 10;})

    document.writeln(b.toString().replaceAll(',', ', ') + "<br/>");

    const c = a.filter(function(elem, i, array){return elem === 3;});

    document.writeln(c.toString().replaceAll(',', ', ') + "<br/>");

    const d = a.reduce(function(prevValue, elem, i, array){return prevValue * elem;}, 1);

    document.writeln(d+ "<br/>");

    const d2 = a.find(function(elem) {return elem > 1;}); //3
    const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
    document.writeln(d2+ "<br/>");
    document.writeln(d3);
}

// All function test cases are down here
console.log("\t\t\tTest Cases");
console.log("\t\t\t-----------");

// 1. Testing the max() function
console.log("Testing the max() function");
// Pass test case
console.log("\tExpected output of max(20,10) is 20  " + functionTester(20, max(20, 10)));
// Fail test case
console.log("\tExpected output of max(25,55) is 55  " + functionTester(25, max(25, 55)));

// 2. Testing the maxOfThree() function
console.log("Testing the maxOfThree() function");
// Pass test case
console.log("\tExpected output of maxOfThree(5,4,44) is 44  " + functionTester(44, maxOfThree(5, 4, 44)));
console.log("\tExpected output of maxOfThree(55,4,44) is 55  " + functionTester(55, maxOfThree(55, 4, 44)));

// Fail test case
console.log("\tExpected output of maxOfThree(55,4,44) is 55  " + functionTester(4, maxOfThree(55, 4, 44)));

// 3. Testing the isVowel() function
console.log("Testing the isVowel() function");
// Pass test case
console.log("\tExpected output of isVowel('e') is true  " + functionTester(true, isVowel("e")));
console.log("\tExpected output of isVowel('I') is true  " + functionTester(true, isVowel("I")));

// Fail test case
console.log("\tExpected output of isVowel('d') is false  " + functionTester(true, isVowel("d")));
console.log("\tExpected output of isVowel('A') is true  " + functionTester(false, isVowel("A")));

// 4. Test cases for sum() function
console.log("Testing the sum() function");
// Pass test case
console.log("\tExpected output of sum([1, 2, 3, 4, 5, 6]) is 21  " + functionTester(21, sum([1, 2, 3, 4, 5, 6])));
// Fail test case
console.log("\tExpected output of sum([1, 2, 3, 4, 5, 6]) is 21 " + functionTester(25, sum([1, 2, 3, 4, 5, 6])));

// 5. Test cases for multiply() function
console.log("Testing the multiply() function");
// Pass test case
console.log("\tExpected output of multiply([1, 2, 3, 4, 5, 6]) is 720  " + functionTester(720, multiply([1, 2, 3, 4, 5, 6])));
// Fail test case
console.log("\tExpected output of multiply([1, 2, 3, 4, 5]) is 120  " + functionTester(360, multiply([1, 2, 3, 4, 5])));

// 6. Test cases for reverse() function
console.log("Testing the reverse() function");
// Pass test case
console.log("\tExpected output of reverse('Computer') is  retupmoC " + functionTester("retupmoC", reverse("Computer")));
// Fail test case
console.log("\tExpected output of reverse('WOW') is  WOW " + functionTester("MOM", reverse("WOW")));

// 7. Test cases for findLongestWord() function
console.log("Testing the findLongestWord() function");
// Pass test case
console.log("\tExpected output of findLongestWord(['test', 'One', 'Orange']) is  6 " + functionTester(6, findLongestWord(["test", "One", "Orange"])));
// Fail test case
console.log("\tExpected output of findLongestWord(['Two', 'One', 'Leg']) is  3 " + functionTester(1, findLongestWord(['Two', 'One', 'Leg'])));

// 8. Test cases for filterLongWords() function
console.log("Testing the filterLongWords() function");
// Pass test case
console.log("\tExpected output of filterLongWords(['Particle', 'Mark', 'California', 'Field'], 5) is [Particle, California]  " + functionTester(["Particle", "California"], filterLongWords(["Particle", "Mark", "California", "Field"], 5)));
console.log("\tExpected output of filterLongWords(['1', '11', '111'], 10) is []  " + functionTester([], filterLongWords(["1", "11", "111"], 10)));
// Fail test case
console.log("\tExpected output of filterLongWords(['1', '11', '111'], 0) is 1, 11, 111  " + functionTester(["111"], filterLongWords(["1", "11", "111"], 0)));

// 9. Modified jsfiddle code
jsFiddleModified();